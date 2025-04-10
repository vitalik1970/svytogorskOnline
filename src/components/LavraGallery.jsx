import React, { useState } from 'react';


function GalleryImage({ src, onClick }) {
  return <img src={src} alt="Святогорская Лавра фото" onClick={onClick} />;
}

function Gallery(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = () => {
    // setSelectedImage(imageSrc);
    // setCurrentIndex(index);
    props.setIsGalleryOpenLaurel(false);
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
    './img/land/land.jpg',
    './img/land/land1.jpg',
    './img/land/land2.jpeg',
    './img/land/land3.jpeg',
    './img/land/land4.jpg',
    './img/land/land5.jpg',
    './img/land/land6.jpeg',
    './img/land/land7.jpg',
    './img/land/land8.jpg',
    './img/land/land9.jpg',
    './img/land/land10.jpg',
    './img/land/land12.png',
    './img/land/land13.jpg',
    './img/land/land14.jpg',
    './img/land/land15.jpeg'
    
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
            <img src={selectedImage} 
           className={`modal-content-img ${isModalOpen ? 'h-100vh' : ''}`}/>
            
          </div>
       
      <div className="gallery__landscape" style={{ display: props.isGalleryOpenLaurel  ? 'block' : 'none' }}>
        <div className="gallery">
        <button  className="feedback__close-button" onClick={openModal}>
                            &times;
      </button>
        {images.map((image, index) => (
            <GalleryImage key={index} src={image} onClick={() => handleImageClick(image, index)} />
          ))}
         
        </div>
      </div>

       
    </>
  );
}

export default Gallery;
