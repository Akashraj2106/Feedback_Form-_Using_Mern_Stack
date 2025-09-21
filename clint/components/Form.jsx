import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Feedback: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/feedback", formData);
      setStatus("✅ Feedback submitted successfully!");
      setFormData({ name: "", email: "", Feedback: "" });
    } catch (err) {
      setStatus("❌ Error submitting feedback!");
    }
  };

  return (
    <div>
      <h1>Welcome to my Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name :</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br/><br/>

        <label>Email :</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br/><br/>

        <label>Feedback :</label>
        <textarea
          placeholder="Enter your feedback here"
          name="Feedback"
          value={formData.Feedback}
          onChange={handleChange}
          required
        ></textarea><br/><br/>

        <button type="submit">Submit</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
};

export default Form;