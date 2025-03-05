import React, { useState } from "react";

const DropdownProjct = ({setActiveDropdown, activeDropdown,  handleMySvyatogorsk}) => {
//   const [isOpen, setIsOpen] = useState(false);
const isOpen = activeDropdown === "projct";
  const toggleDropdown = () => {
    setActiveDropdown(isOpen ? null : "projct");
  };

  return (
    <ul className="dropdown__infrostr-menu" onClick={toggleDropdown}>
      <li 
        className="dropdown__infrostr-menu-item dropdown"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        <a href="#" className="dropdown__infrostr-menu-link">
          о проекте
        </a>
        {isOpen && (
          <ul className="dropdown__infrostr-list">
            <li className="dropdown__infrostr-item">
              <a href="./purpose_project_ru.html"  className="dropdown__infrostr-link">
                цель проекта
              </a>
            </li>
            <li className="dropdown__infrostr-item">
              <a onClick={handleMySvyatogorsk} className="dropdown__infrostr-link">
                Я <span style={{fontSize: "24px"}}>&#10084;&#65039;</span> Святогорск!
              </a>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
};

export default DropdownProjct;