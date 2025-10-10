import { useState } from "react";
import "./App.css";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    course: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form fields
    setFormData({ fullName: "", email: "", course: "" });
  };

  return (
    <div className="form-container">
      <h2>Course Registration Form</h2>

      {submitted && <p className="success">Registration successful! 🎉</p>}

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Select Course</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        >
          <option value="">-- Choose a course --</option>
          <option value="frontend">Frontend Development</option>
          <option value="backend">Backend Development</option>
          <option value="data">Data Analytics</option>
          <option value="uiux">UI/UX Design</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
