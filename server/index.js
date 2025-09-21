const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const Feedback_Form = require("./models/Feedback_Form");
const Register = require("./models/Register");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("DB connection error:", err));

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

// Routes
app.get("/", (req, res) => {
  res.send("server is working");
});

app.get("/api/feedback", (req, res) => {
  res.send("feedback is working");
});

app.get("/api/Register", (req, res) => {
  res.send("Register is working");
});

// Feedback POST
app.post("/api/feedback", async (req, res) => {
  try {
    const { name, email, Feedback } = req.body;

    if (!name || !email || !Feedback) {
      return res.status(400).json({ error: "All fields required" });
    }

    const feedback = new Feedback_Form({ name, email, Feedback });
    await feedback.save();

    res.status(201).json({ message: "Feedback submitted successfully", feedback });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// Register POST
app.post("/api/Register", async (req, res) => {
  try {
    const { name, Email, Phoneno, age } = req.body;

    if (!Email || !Phoneno || !name) {
      return res.status(400).json({ error: "All fields required" });
    }

    const register = new Register({ name, Email, Phoneno, age });
    await register.save();

    res.status(201).json({ message: "Register successful", register });
  } catch (err) {
    res.status(500).json({ error: "Not registered", details: err.message });
  }
});
