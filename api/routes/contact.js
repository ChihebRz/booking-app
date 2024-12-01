import express from "express";
import Question from "../models/Question.js";

const router = express.Router();

// POST: Add question to the database
router.post("/", async (req, res, next) => {
  const { email, firstName, lastName, question } = req.body;

  if (!email || !firstName || !lastName || !question) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newQuestion = new Question({ email, firstName, lastName, question });
    await newQuestion.save();
    res.status(201).json({ message: "Question submitted successfully." });
  } catch (err) {
    next(err);
  }
});

export default router;
