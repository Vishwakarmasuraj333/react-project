function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">
          <h1>Hire Me</h1>
          <p>
            I'm available for freelance projects, full-time roles,
            and creative collaborations. Let’s build something amazing together.
          </p>

          <div className="info-box">
            <p><strong>Email:</strong> itxsuraj@gmail.com</p>
            <p><strong>Phone:</strong> +91 9370944696</p>
            <p><strong>Location:</strong> India</p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;