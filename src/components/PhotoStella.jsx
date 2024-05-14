import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

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
    <Helmet>
      <title>Svyatogorsk in photographs</title>
      <link rel="canonical" href="https://svyatogorsk.online/" />
      <meta name="yandex-verification" content="904340a458332f05" />
      <meta name="google-site-verification" content="qJXzHcl4xTnWqFCbMM9ngds8qYmW9BDu2HS3pxiqqhA" />
    <meta property="title" content="photographs of the city of Svyatogorsk, Svyatogorsk Lavra and the Holy Mountains reserve, monument to Artem, Seversky Donets river, monastic monastery"/>
    <meta name="keywords" content="photographs of the city of Svyatogorsk, Svyatogorsk Lavra and the Holy Mountains reserve, monument to Artem, Seversky Donets river, monastic monastery, bridge over the river"/>
    <meta name="description" content="Sights of Svyatogorsk Lavra, Svyatogorsk National Reserve, the Holy Mountains reserve, the city of Svyatogorsk, Donetsk region, Kramatorsk region of Ukraine in photographs
    "/>
    </Helmet>
    <div className="foto__stella">
    <img alt='foto'
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
