import express from "express";
import { body, validationResult } from "express-validator";
import Scheme from "../models/Scheme.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// @route   GET /api/schemes
// @desc    Get all government schemes with filters
// @access  Public
router.get("/", async (req, res) => {
  try {
    const { category, state, page = 1, limit = 10 } = req.query;

    let filter = { isActive: true };

    if (category) filter.category = category;
    if (state) filter.state = { $regex: state, $options: "i" };

    const skip = (page - 1) * limit;

    const schemes = await Scheme.find(filter)
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await Scheme.countDocuments(filter);

    res.status(200).json({
      success: true,
      count: schemes.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
      schemes,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   GET /api/schemes/:id
// @desc    Get single scheme
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const scheme = await Scheme.findById(req.params.id);

    if (!scheme) {
      return res.status(404).json({ error: "Scheme not found" });
    }

    res.status(200).json({
      success: true,
      scheme,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   POST /api/schemes
// @desc    Create a new scheme (Admin only)
// @access  Private
router.post(
  "/",
  protect,
  [
    body("name").notEmpty().withMessage("Scheme name is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("ministry").notEmpty().withMessage("Ministry name is required"),
    body("category").notEmpty().withMessage("Category is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const {
        name,
        description,
        ministry,
        eligibility,
        benefits,
        applicationProcess,
        documents,
        category,
        state,
        website,
        contactEmail,
        contactPhone,
        thumbnail,
        startDate,
        endDate,
      } = req.body;

      const scheme = new Scheme({
        name,
        description,
        ministry,
        eligibility,
        benefits,
        applicationProcess,
        documents,
        category,
        state,
        website,
        contactEmail,
        contactPhone,
        thumbnail,
        startDate,
        endDate,
      });

      await scheme.save();

      res.status(201).json({
        success: true,
        scheme,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// @route   PUT /api/schemes/:id
// @desc    Update a scheme
// @access  Private
router.put("/:id", protect, async (req, res) => {
  try {
    let scheme = await Scheme.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!scheme) {
      return res.status(404).json({ error: "Scheme not found" });
    }

    res.status(200).json({
      success: true,
      scheme,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   DELETE /api/schemes/:id
// @desc    Delete a scheme
// @access  Private
router.delete("/:id", protect, async (req, res) => {
  try {
    const scheme = await Scheme.findByIdAndDelete(req.params.id);

    if (!scheme) {
      return res.status(404).json({ error: "Scheme not found" });
    }

    res.status(200).json({
      success: true,
      message: "Scheme deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
