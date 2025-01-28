import React, { useState, useEffect } from "react";

const DropdowPhoto = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  const togglDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    function handleResize() {
        setIsMobile(window.innerWidth <= 700);
    }

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

  return (
    <ul className="dropdown__infrostr-menu" onClick={togglDropdown}>
      <li 
        className="dropdown__infrostr-menu-item dropdown"
        onMouseEnter={togglDropdown}
        onMouseLeave={togglDropdown}
      >
        <a href="#" className="dropdown__infrostr-menu-link">
        фотогалерея
        </a>
        {isOpen && (
          <ul className="dropdown__infrostr-list">
            <li className="dropdown__infrostr-dropdown-item">
              <a onClick={props.handleLandscapeClick} className="dropdown__infrostr-link">
              {isMobile ? 'лавра' : 'святогорская лавра'}
              </a>
            </li>
            <li className="dropdown__infrostr-item">
              <a onClick={props.handleMonumentClick} className="dropdown__infrostr-link">
              {isMobile ? 'артём' : 'памятник артему'}
              </a>
            </li>
            <li className="dropdown__infrostr-item">
              <a onClick={props.handleHistoryClick} className="dropdown__infrostr-link">
              {isMobile ? 'исторические' : 'исторические фото '}
              </a>
            </li>
            <li className="dropdown__infrostr-item">
              <a href="./index_img.html" className="dropdown__infrostr-link">
              война
              </a>
            </li>
            {/* <li className="dropdown__infrostr-item">
              <a href="https://drive.google.com/file/d/1iuSUOTAvIrPUlpqHYETwOE_6QGmVkof7/view?usp=sharing" className="dropdown__infrostr-link">
             видео
              </a>
            </li> */}
          </ul>
        )}
      </li>
    </ul>
  );
};

export default DropdowPhoto;
