import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    Email: "",
    Password: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/Login", formData);
      setStatus("Login confirmed ✅");
      setFormData({ Email: "", Password: "" }); // reset fields
    } catch (err) {
      setStatus("Error in Login ❌");
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Welcome to login page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="Email"
          placeholder="Enter Email"
          value={formData.Email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="Password"
          placeholder="Enter Password"
          value={formData.Password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>

      <p>{status}</p>

      <p>
        Don’t have an account? <Link to="/Register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
