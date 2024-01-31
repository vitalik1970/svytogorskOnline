import React from 'react';
import { useState } from 'react';
import Slideshow from './Slideshow';
import PhotoStella from './PhotoStella';
import LavraGallery from './LavraGallery'


function MainPage() {
  const [isGalleryOpenLaurel , setIsGalleryOpenLaurel ] = useState(false);

  const handleLandscapeClick = () => {
    setIsGalleryOpenLaurel(!isGalleryOpenLaurel );
  };

  return (
    
    <div>
       
      <div class="main__wrapper">
        <Slideshow/>        
<div class="logo"><h1>SvytogorskOnline</h1></div>
   <div class="nav"> 
<div class="nav__new"><h2>Svyatogorye photo gallery</h2></div>
 <div class="nav__gall-landscape" onClick={handleLandscapeClick}><h2>Landscape laurel</h2>{isGalleryOpenLaurel ? <img src="./img/icon-close.png" alt="icon" className="nav__gall-close"/> : ''}</div> 
<div class="nav__gall-artem"><h2>Monument photo</h2></div>
<div class="nav__gall-history"><h2>Historical photos</h2>
</div>
    </div>

 
   <PhotoStella/> 
   <LavraGallery isGalleryOpenLaurel ={isGalleryOpenLaurel } setIsGalleryOpenLaurel={setIsGalleryOpenLaurel }/>
<div class="gallery__artem">
    <div class="gallery2">
        <img src="./img/artem/art1.JPG"/>
        <img src="./img/artem/art2.jpg"/>
        <img src="./img/artem/art3.jpg"/>
        <img src="./img/artem/art4.jpeg"/>
        <img src="./img/artem/art5.jpg"/>
        <img src="./img/artem/art6.jpg"/>
    </div>
</div>
<div class="gallery__history">
<div class="gallery3">
    <img src="./img/history/his.jpg" alt="" />
    <img src="./img/history/his1.jpg" alt=""/>
    <img src="./img/history/his2.png" alt=""/>
    <img src="./img/history/his3.png" alt=""/>
    <img src="./img/history/his4.png" alt=""/>
    <img src="./img/history/his5.png" alt=""/>
    <img src="./img/history/his6.png" alt=""/>
    <img src="./img/history/his7.png" alt=""/>
    <img src="./img/history/his8.png" alt=""/>
</div>
</div>

</div>
    </div>
  )
}

export default MainPage

