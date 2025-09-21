const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

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

app.get("/api/Login", (req, res) => {
  res.send("Login is working");
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
    const { name, Email, Phoneno, age , Password } = req.body;

    if (!Email || !Phoneno || !name || !Password) {
      return res.status(400).json({ error: "All fields required" });
    }

    const register = new Register({ name, Email, Phoneno, age , Password });
    await register.save();

    res.status(201).json({ message: "Register successful", register });
  } catch (err) {
    res.status(500).json({ error: "Not registered", details: err.message });
  }
});

app.post("/api/Login", async (req, res) => {
  try {
    const { Email, Password } = req.body;

    // check if user exists
    const user = await Register.findOne({ Email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    // check password
    if (user.Password !== Password) {   // ❌ plain-text check (use bcrypt in production)
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




