import express from "express";
import { body, validationResult } from "express-validator";
import Skill from "../models/Skill.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// @route   GET /api/skills
// @desc    Get all skills/courses with filters
// @access  Public
router.get("/", async (req, res) => {
  try {
    const { category, level, page = 1, limit = 10 } = req.query;

    let filter = { isPublished: true };

    if (category) filter.category = category;
    if (level) filter.level = level;

    const skip = (page - 1) * limit;

    const skills = await Skill.find(filter)
      .skip(skip)
      .limit(parseInt(limit))
      .select("-reviews")
      .sort({ createdAt: -1 });

    const total = await Skill.countDocuments(filter);

    res.status(200).json({
      success: true,
      count: skills.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
      skills,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   GET /api/skills/:id
// @desc    Get single skill/course
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id).populate("enrolledUsers", "name email");

    if (!skill) {
      return res.status(404).json({ error: "Skill not found" });
    }

    res.status(200).json({
      success: true,
      skill,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   POST /api/skills
// @desc    Create a new skill/course
// @access  Private
router.post(
  "/",
  protect,
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("category").notEmpty().withMessage("Category is required"),
    body("instructor").notEmpty().withMessage("Instructor name is required"),
    body("duration").notEmpty().withMessage("Duration is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, description, category, level, instructor, duration, price, curriculum, thumbnail } = req.body;

      const skill = new Skill({
        title,
        description,
        category,
        level,
        instructor,
        duration,
        price,
        curriculum,
        thumbnail,
      });

      await skill.save();

      res.status(201).json({
        success: true,
        skill,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// @route   PUT /api/skills/:id
// @desc    Update a skill/course
// @access  Private
router.put("/:id", protect, async (req, res) => {
  try {
    let skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!skill) {
      return res.status(404).json({ error: "Skill not found" });
    }

    res.status(200).json({
      success: true,
      skill,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   DELETE /api/skills/:id
// @desc    Delete a skill/course
// @access  Private
router.delete("/:id", protect, async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);

    if (!skill) {
      return res.status(404).json({ error: "Skill not found" });
    }

    res.status(200).json({
      success: true,
      message: "Skill deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   POST /api/skills/:id/enroll
// @desc    Enroll in a skill/course
// @access  Private
router.post("/:id/enroll", protect, async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({ error: "Skill not found" });
    }

    if (skill.enrolledUsers.includes(req.user.id)) {
      return res.status(400).json({ error: "You are already enrolled in this course" });
    }

    skill.enrolledUsers.push(req.user.id);
    await skill.save();

    res.status(200).json({
      success: true,
      message: "Enrolled successfully",
      skill,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   POST /api/skills/:id/review
// @desc    Add a review to a skill/course
// @access  Private
router.post("/:id/review", protect, async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const skill = await Skill.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({ error: "Skill not found" });
    }

    skill.reviews.push({
      user: req.user.id,
      rating,
      comment,
    });

    await skill.save();

    res.status(201).json({
      success: true,
      message: "Review added successfully",
      skill,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
