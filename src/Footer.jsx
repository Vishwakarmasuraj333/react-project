import { useState, useEffect } from "react";

function Footer() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h2 className="footer-logo">Suraj</h2>
          <p>
            Passionate Frontend Developer creating modern, responsive 
            and high-performance web applications.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>React Development</li>
            <li>Freelancing</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            
          </div>
                  <button 
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀" : "🌙"}
        </button>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Suraj | All Rights Reserved



      </div>
      
    </footer>
  );
}

export default Footer;