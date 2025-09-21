const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const Feedback_Form = require("./models/Feedback_Form");
const Register = require("./models/Register");

const app = express();

app.use(cors());
app.use(express.json());

// User Schema
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";  //npm install bcryptjs jsonwebtoken

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




// app.post("/api/auth/login", async (req, res) => {
//   try {
//     const { Email, Password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ msg: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
