import React, { useState } from 'react';


function MonumentGallery({ src, onClick }) {
  return <img src={src} alt="gallery" onClick={onClick} />;
}

function MonumentGallery(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setCurrentIndex(index);
    props.setIsGalleryOpenMonument(true);
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
        "./img/artem/art1.JPG",
        "./img/artem/art2.jpg",
        "./img/artem/art3.jpg",
        "./img/artem/art4.jpeg",
        "./img/artem/art5.jpg",
        "./img/artem/art6.jpg"
  ];
  

  return (
    <div>
       
        <div  onClick={closeModal}>
        {isModalOpen ? <img src="./img/icon-close.png" alt="icon" className="close-img"/> : '' }
            </div>
           <div onClick={nextPhoto}> 
           {isModalOpen ? <img src="./img/next-icon.png" alt="icon" className="nex-img"/> : '' }  
          </div>
          <div className="modal-content">            
            <img src={selectedImage} alt="" />
          </div>
       
      <div className="gallery__artem" style={{ display: props.isGalleryOpenMonument  ? 'block' : 'none' }}>
        <div className="gallery2">
        {images.map((image, index) => (
            <GalleryImage key={index} src={image} onClick={() => handleImageClick(image, index)} />
          ))}
         
        </div>
      </div>

       
    </div>
  );
}

export default MonumentGallery;