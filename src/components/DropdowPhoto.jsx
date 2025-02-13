import React, { useState, useEffect } from "react";

const DropdowPhoto = (props) => {
//   const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  const isOpen = props.activeDropdown === "photo";

  const toggleDropdown = () => {
    props.setActiveDropdown(isOpen ? null : "photo");
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
    <ul className="dropdown__infrostr-menu" onClick={toggleDropdown}>
      <li 
        className="dropdown__infrostr-menu-item dropdown"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        <a href="#" className="dropdown__infrostr-menu-link">
        фотогалерея
        </a>
        {isOpen && (
          <ul className="dropdown__infrostr-list">
            <li className="dropdown__infrostr-item">
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
            <li className="dropdown__infrostr-item">
              <a onClick={props.handleUploadPhoto}  className="dropdown__infrostr-link">
              {isMobile ? 'загрузить фото' : 'загрузить свои фото'}
              </a>
            </li>
            <li className="dropdown__infrostr-item">
              <a href="./custom_photos.html" className="dropdown__infrostr-link">
              {isMobile ? 'фото пользователей' : 'просмотреть фото пользователей'}
              </a>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
};

export default DropdowPhoto;
