import React, { useState } from 'react';



function GalleryImage({ src, onClick }) {
  return <img src={src} alt="Святогорск исторические фотографии Святогорской Лавры " onClick={onClick}/>;
}

function HistoryGallery(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = () => {
    // setSelectedImage(imageSrc);
    // setCurrentIndex(index);
    props.setIsGalleryOpenHistory(false);
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
       
      <div className="gallery__history" style={{ display: props.isGalleryOpenHistory  ? 'block' : 'none' }}>
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

export default HistoryGallery;
