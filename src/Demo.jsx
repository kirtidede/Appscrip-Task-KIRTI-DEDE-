import React, { useState } from 'react';
import './index.css'; // Import your CSS file

function Demo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="closebtn" onClick={toggleSidebar}>×</button>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <div id="main">
        <button className="openbtn" onClick={toggleSidebar}>☰ Open Sidebar</button>
        <h2>Collapsed Sidebar</h2>
        <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.

        </p>
      </div>
    </div>
  );
}

export default Demo;
