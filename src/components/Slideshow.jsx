import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';

const SlideShow = () => {
  const allImages = [
    "./img/slav.jpg",
    "/img/slav1.png",
    "/img/slav2.png",
    "/img/slav3.jpg",
    "/img/slav4.png",
    "/img/slav5.jpg",
    "/img/slav6.jpg",
    "/img/slav9.png",
    "/img/slav10.jpg"
  ];

  const [imgNum, setImgNum] = useState(0);

  const chgImg = () => {
    setImgNum((prevImgNum) => (prevImgNum + 1) % allImages.length);
  };

  useEffect(() => {
    const interval = setInterval(chgImg, 3000);
    return () => clearInterval(interval);
  }, [chgImg]);

  return (
    <>
    {/* <Helmet>
      <title>Svyatogorsk in photographs</title>
     
      <meta name="yandex-verification" content="904340a458332f05" />
      <meta name="google-site-verification" content="qJXzHcl4xTnWqFCbMM9ngds8qYmW9BDu2HS3pxiqqhA" />
    <meta property="title" content="photographs of the city of Svyatogorsk, Svyatogorsk Lavra and the Holy Mountains reserve, monument to Artem, Seversky Donets river, monastic monastery"/>
    <meta name="keywords" content="photographs of the city of Svyatogorsk, Svyatogorsk Lavra and the Holy Mountains reserve, monument to Artem, Seversky Donets river, monastic monastery, bridge over the river"/>
    <meta name="description" content="Sights of Svyatogorsk Lavra, Svyatogorsk National Reserve, the Holy Mountains reserve, the city of Svyatogorsk, Donetsk region, Kramatorsk region of Ukraine in photographs
    "/>
    </Helmet> */}
    <img className="slide" src={allImages[imgNum]} alt="фотографии Святогорска, Свято-Успенской Святогорской Лавры, реки Северский Донец, памятник Артему" />
    </>
  );
};

export default SlideShow;
