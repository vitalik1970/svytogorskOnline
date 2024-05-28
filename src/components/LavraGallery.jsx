import React, { useState } from 'react';


function GalleryImage({ src, onClick }) {
  return <img src={src} alt="photos of Svyatogorsk Lavra" onClick={onClick} />;
}

function Gallery(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setCurrentIndex(index);
    props.setIsGalleryOpenLaurel(true);
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
    './img/land/land.jpeg',
    './img/land/land1.jpg',
    './img/land/land2.jpg',
    './img/land/land3.jpeg',
    './img/land/land4.jpg',
    './img/land/land5.jpg',
    './img/land/land6.jpeg',
    './img/land/land7.jpg',
    './img/land/land8.jpg',
  ];
  

  return (
    <>
   
       
    <div className="modal-content">  
          <div className='gallery__close-next' >
        <div  onClick={closeModal}>
        {isModalOpen ? <img src="./img/icon-close.png" alt="icon" className="close-img"/> : '' }
            </div>
           <div onClick={nextPhoto}> 
           {isModalOpen ? <img src="./img/next-icon.png" alt="icon" className="nex-img"/> : '' }  
          </div>
          </div>          
            <img src={selectedImage} alt="" />
          </div>
       
      <div className="gallery__landscape" style={{ display: props.isGalleryOpenLaurel  ? 'block' : 'none' }}>
        <div className="gallery">
        {images.map((image, index) => (
            <GalleryImage key={index} src={image} onClick={() => handleImageClick(image, index)} />
          ))}
         
        </div>
      </div>

       
    </>
  );
}

export default Gallery;
