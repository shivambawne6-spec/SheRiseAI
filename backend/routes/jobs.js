import express from "express";
import { body, validationResult } from "express-validator";
import Job from "../models/Job.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// @route   GET /api/jobs
// @desc    Get all jobs with filters
// @access  Public
router.get("/", async (req, res) => {
  try {
    const { category, jobType, location, page = 1, limit = 10 } = req.query;

    let filter = { isActive: true };

    if (category) filter.category = category;
    if (jobType) filter.jobType = jobType;
    if (location) filter.location = { $regex: location, $options: "i" };

    const skip = (page - 1) * limit;

    const jobs = await Job.find(filter)
      .skip(skip)
      .limit(parseInt(limit))
      .populate("postedBy", "name email")
      .sort({ createdAt: -1 });

    const total = await Job.countDocuments(filter);

    res.status(200).json({
      success: true,
      count: jobs.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
      jobs,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   GET /api/jobs/:id
// @desc    Get single job
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)
      .populate("postedBy", "name email")
      .populate("applicants", "name email");

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   POST /api/jobs
// @desc    Create a new job
// @access  Private
router.post(
  "/",
  protect,
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("company").notEmpty().withMessage("Company name is required"),
    body("location").notEmpty().withMessage("Location is required"),
    body("category").notEmpty().withMessage("Category is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, description, company, location, salary, jobType, category, requiredSkills, experience } = req.body;

      const job = new Job({
        title,
        description,
        company,
        location,
        salary,
        jobType,
        category,
        requiredSkills,
        experience,
        postedBy: req.user.id,
      });

      await job.save();

      res.status(201).json({
        success: true,
        job,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// @route   PUT /api/jobs/:id
// @desc    Update a job
// @access  Private
router.put("/:id", protect, async (req, res) => {
  try {
    let job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    if (job.postedBy.toString() !== req.user.id) {
      return res.status(401).json({ error: "Not authorized to update this job" });
    }

    job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   DELETE /api/jobs/:id
// @desc    Delete a job
// @access  Private
router.delete("/:id", protect, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    if (job.postedBy.toString() !== req.user.id) {
      return res.status(401).json({ error: "Not authorized to delete this job" });
    }

    await Job.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   POST /api/jobs/:id/apply
// @desc    Apply for a job
// @access  Private
router.post("/:id/apply", protect, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    if (job.applicants.includes(req.user.id)) {
      return res.status(400).json({ error: "You have already applied for this job" });
    }

    job.applicants.push(req.user.id);
    await job.save();

    res.status(200).json({
      success: true,
      message: "Application submitted successfully",
      job,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
