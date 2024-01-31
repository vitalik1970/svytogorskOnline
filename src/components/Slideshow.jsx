import React, { useState, useEffect } from 'react';

const SlideShow = () => {
  const allImages = [
    "./img/slav.png",
    "/img/slav1.png",
    "/img/slav2.png",
    "/img/slav3.png",
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
    <img className="slide" src={allImages[imgNum]} alt="slide_show" />
  );
};

export default SlideShow;
