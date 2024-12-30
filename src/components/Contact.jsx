import React, { useState } from "react";
import "./contact.css";
import { FaInstagram, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ContactFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="ContactSection" id="Contact">
      <h1 className="text-5xl lg:text-6xl font-bold text-center mb-12">Contact Me</h1>
      <div className="contact-page">
      <div className="contact-form-container">
        <form className="contact-form1" onSubmit={handleSubmit}>
          <h2 className="connectwithme">Connect with me</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter your Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      <div className="contact-info-container">
        <h2 className="emailheading">Email</h2>
        <a href="mailto:vadlarohith1352@gmail.com"><h3>vadlarohith1352@gmail.com</h3></a>
        
        <h2 className="social">Social</h2>
        <div className="social-icons">
          
          <a href="https://www.linkedin.com/in/rohithvadla/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedinIn size={40} />
          </a>
          <a href="https://github.com/vadlarohith" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={40} />
          </a>
          <a href="https://www.instagram.com/vadlarohith135/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram size={40} />
          </a>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default ContactFormPage;
