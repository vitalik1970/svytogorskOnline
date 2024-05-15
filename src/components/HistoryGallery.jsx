import React, { useState } from 'react';
import { Helmet } from 'react-helmet';


function GalleryImage({ src, onClick }) {
  return <img src={src} alt="gallery" onClick={onClick}/>;
}

function HistoryGallery(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setCurrentIndex(index);
    props.setIsGalleryOpenHistory(true);
  };

  const nextPhoto = () => {
    if (!images || images.length === 0) {
      console.error("Images are not defined or empty");
      return;
    }
  
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    const nextImage = images[nextIndex];
  
    setSelectedImage(nextImage);
  };

  const closeModal = () => {
    setSelectedImage('');
    setModalOpen(false);
  };

   const handleImageClick = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setCurrentIndex(index);
    setModalOpen(true);
  };
  
  const images = [
    "./img/history/his.jpg",
    "./img/history/his1.jpg",
    "./img/history/his2.png",
    "./img/history/his3.jpg",
    "./img/history/his4.jpg",
    "./img/history/his5.png",
    "./img/history/his6.jpg",
    "./img/history/his7.png",
    "./img/history/his8.jpg"
  ];
  
  return (
    <>
      <Helmet>
      <title>Svyatogorsk in photographs</title>
    
      <meta name="yandex-verification" content="904340a458332f05" />
      <meta name="google-site-verification" content="qJXzHcl4xTnWqFCbMM9ngds8qYmW9BDu2HS3pxiqqhA" />
    <meta property="title" content="photographs of the city of Svyatogorsk, Svyatogorsk Lavra and the Holy Mountains reserve, monument to Artem, Seversky Donets river, monastic monastery"/>
    <meta name="keywords" content="photographs of the city of Svyatogorsk, Svyatogorsk Lavra and the Holy Mountains reserve, monument to Artem, Seversky Donets river, monastic monastery, bridge over the river"/>
    <meta name="description" content="Sights of Svyatogorsk Lavra, Svyatogorsk National Reserve, the Holy Mountains reserve, the city of Svyatogorsk, Donetsk region, Kramatorsk region of Ukraine in photographs
    "/>
    </Helmet> 
        <div  onClick={closeModal}>
        {isModalOpen ? <img src="./img/icon-close.png" alt="icon" className="close-img"/> : '' }
            </div>
           <div onClick={nextPhoto}> 
           {isModalOpen ? <img src="./img/next-icon.png" alt="icon" className="nex-img"/> : '' }  
          </div>
          <div className="modal-content">            
            <img src={selectedImage} alt="" />
          </div>
       
      <div className="gallery__history" style={{ display: props.isGalleryOpenHistory  ? 'block' : 'none' }}>
        <div className="gallery3">
        {images.map((image, index) => (
            <GalleryImage key={index} src={image} onClick={() => handleImageClick(image, index)} />
          ))}
         
        </div>
      </div>
    </>
  );
}

export default HistoryGallery;
