import React, { useState } from "react";

const DropdownInfrostr= () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul className="dropdown__infrostr-menu">
      <li 
        className="dropdown__infrostr-menu-item dropdown"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        <a href="#" className="dropdown__infrostr-menu-link">
          инфраструктура
        </a>
        {isOpen && (
          <ul className="dropdown__infrostr-list">
            <li className="dropdown__infrostr-dropdown-item">
              <a href="/transport.html" className="dropdown__infrostr-link">
                транспорт
              </a>
            </li>
            <li className="dropdown__infrostr-item">
              <a href="/infrastructure.html" className="dropdown__infrostr-link">
                магазины
              </a>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
};

export default DropdownInfrostr;
