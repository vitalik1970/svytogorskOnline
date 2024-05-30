import React, { useState, useEffect } from 'react';

const PhotoComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerStyleClick  = {
    position: 'absolute',
    left: '-380px',
    top: '-5px',
    width: '400px',
    transition: 'width 0.5s',
  };
  const containerStyl = {
  width: '150px',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: 'rgb(204, 204, 204)',
  borderImage: 'initial',
  padding: '5px',
  transition: 'width 0.5s',
  }
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOutsideClick = (event) => {
    // Проверяем, был ли клик вне фото
    if (isExpanded && !event.target.closest('.photo')) {
      setIsExpanded(false);
    }
  };

  // Добавляем обработчик клика за пределами компонента
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isExpanded, handleOutsideClick]);

  return (
    <>
  
    <div className="foto__stella">
    <img alt='фото стеллы при вьезде в Святогорск с изображением Святого Иоанна Затворника'
      onClick={handleClick}
      className="photo"
      src="./img/60_big.jpg"
      style={isExpanded ? containerStyleClick  : containerStyl}
    />
    </div>
    </> 
  );
};

export default PhotoComponent;
