import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    Email: "",
    Phoneno: "",
    age: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/Register", formData); // lowercase route
      setStatus("Register confirmed ✅");
      setFormData({ name: "", Email: "", Phoneno: "", age: "" });
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
          value={formData.age || ""} // avoid React warning
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Register</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default Register;
