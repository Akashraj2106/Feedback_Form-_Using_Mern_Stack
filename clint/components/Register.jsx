import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    Email: "",
    Phoneno: "",
    age: "",
    Password: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/Register", formData); // ✅ lowercase route
      setStatus("Register confirmed ✅");
      setFormData({ name: "", Email: "", Phoneno: "", age: "", Password: "" }); // ✅ reset all fields
    } catch (err) {
      setStatus("Error in register ❌");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
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
          type="tel"
          name="Phoneno"
          placeholder="Enter Phone Number"
          value={formData.Phoneno}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
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
        <button type="submit">Register</button>
      </form>

      <p>{status}</p>

      <p>
        Already have an account? <Link to="/Login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
