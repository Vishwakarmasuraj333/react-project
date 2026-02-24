import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Suraj</div>

      {/* Hamburger */}
      <div
        className={isOpen ? "hamburger active" : "hamburger"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <nav className={isOpen ? "nav active" : "nav"}>
        <ul>
             
          <li onClick={() => setIsOpen(false)}>Home</li>
          <li onClick={() => setIsOpen(false)}>Login</li>
          <li onClick={() => setIsOpen(false)}>Projects</li>
          <li onClick={() => setIsOpen(false)}>Contact</li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;