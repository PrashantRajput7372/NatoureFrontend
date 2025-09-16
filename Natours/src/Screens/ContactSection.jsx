import React,{useState} from "react";
import "./CssFiles/ContactSection.css";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Email validation function
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Error logic
  const emailError =
    touched.email && !validateEmail(form.email)
      ? "Please enter a valid email address."
      : "";

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle blur to set touched
  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true });

    // Validate all
    if (
      !form.name.trim() ||
      !validateEmail(form.email) ||
      !form.message.trim()
    ) {
      return; // Don't proceed if any invalid
    }

    // Success: show message, reset form and touched
    setShowSuccess(true);
    setForm({ name: "", email: "", message: "" });
    setTouched({});
    setTimeout(() => setShowSuccess(false), 2500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          Have a question or want to work together? Fill out the form and I’ll get back to you soon!
        </p>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contact-input"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {touched.name && !form.name.trim() && (
            <span className="contact-error">Name is required.</span>
          )}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact-input"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {emailError && (
            <span className="contact-error">{emailError}</span>
          )}
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-textarea"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {touched.message && !form.message.trim() && (
            <span className="contact-error">Message is required.</span>
          )}
          <button type="submit" className="contact-button">
            Send Message
          </button>
          {showSuccess && (
            <div className="contact-success">
              Message sent successfully! (Fake)
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;