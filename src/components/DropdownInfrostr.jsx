import React, { useState } from "react";

const DropdownInfrostr= ({setActiveDropdown, activeDropdown, handlRealitiesSvyatogorsk}) => {
//   const [isOpen, setIsOpen] = useState(false);
const isOpen = activeDropdown === "infrostr";
  const toggleDropdown = () => {
    setActiveDropdown(isOpen ? null : "infrostr");
  };

  return (
    <ul className="dropdown__infrostr-menu" onClick={toggleDropdown}>
      <li 
        className="dropdown__infrostr-menu-item dropdown"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        <a href="#" className="dropdown__infrostr-menu-link">
          о Святогорске
        </a>
        {isOpen && (
          <ul className="dropdown__infrostr-list">
            <li className="dropdown__infrostr-item">
              <a onClick={handlRealitiesSvyatogorsk} className="dropdown__infrostr-link">
                пару слов о SV
              </a>
            </li>
            <li className="dropdown__infrostr-item">
              <a href="/transport.html" className="dropdown__infrostr-link">
                транспорт
              </a>
            </li>
            <li className="dropdown__infrostr-item">
              <a href="/magaziny-svytogorska.html" className="dropdown__infrostr-link">
                магазины
              </a>
            </li>
            <li className="dropdown__infrostr-item">
              <a href="/infrastructure.html" className="dropdown__infrostr-link">
                услуги
              </a>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
};

export default DropdownInfrostr;
