import React, { useState } from 'react';
import { Link } from 'react-router';
import "./ContactMe.css";

const Contactme = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendemail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/server', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent");
        setForm({ name: '', email: '', message: '' });
      } else {
        alert("Something went wrong");
      }

    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }

    setLoading(false);
  };

  return (
    <div className="contact-container">

      <div className="contact-header">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-subtitle">
          Have something in mind? Send me a message and I’ll get back to you.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSendemail}>

        <div className="input-row">
          <input
            className="contact-input"
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleOnchange}
            required
          />

          <input
            className="contact-input"
            name="email"
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleOnchange}
            required
          />
        </div>

        <textarea
          className="contact-textarea"
          name="message"
          rows="8"
          placeholder="Write your message here..."
          value={form.message}
          onChange={handleOnchange}
          required
        />

        <button
          className="contact-button"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>

      <div className="contact-footer">
        <p className="links">
          <Link to="/">Go Back</Link>
        </p>
      </div>

    </div>
  );
};

export default Contactme;