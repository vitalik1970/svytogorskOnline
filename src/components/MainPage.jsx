import React from 'react';
import { useState } from 'react';
import Slideshow from './Slideshow';
import PhotoStella from './PhotoStella';
import LavraGallery from './LavraGallery';
import Feedback from './Feedback'


function MainPage() {
  const [isGalleryOpenLaurel , setIsGalleryOpenLaurel ] = useState(false);
  const [isFeedback, setIsFeedback] = useState(false);
  const [showPhotoGallery, setshowPhotoGallery] = useState(false);

  const clickShowPhotoGallery = () => {
    setshowPhotoGallery(!showPhotoGallery)
  }
  const handleLandscapeClick = () => {
    setIsGalleryOpenLaurel(!isGalleryOpenLaurel );
  };
  const handleFeedbackClick = () => {
    setIsFeedback(!isFeedback);
  };
  return (
    
    <div>
       
      <div class="main__wrapper">
        <Slideshow/>  
        <header class="transparent">
		<div class="container">
			<div class="header__top">
            	
      <div class="logo"><h2>SvytogorskOnline</h2></div>

			</div>
			<div class="header_wrap">
				<nav class="head_menu">
<ul class=""><li ><a href="./index.html">HOME</a></li>
<li  class=""><a onClick={clickShowPhotoGallery} >PHOTOGALLERY</a></li>
<li   class=""><a href="https://wow-wedding.com/portfolios/">PHOTOGALLERY</a></li>
<li   class=""><a href="https://wow-wedding.com/venues/">VENUES</a></li>
<li   class=""><a href="https://wow-wedding.com/media/">PRESS</a></li>
<li   class=""><a onClick={handleFeedbackClick}>CONTACT</a></li>
</ul>										

				</nav>	
			</div>
		</div>
	</header>      
{showPhotoGallery ?
   <div class="nav"> 
 <div class="nav__gall-landscape" onClick={handleLandscapeClick}><h3>Landscape laurel</h3>{isGalleryOpenLaurel ? <img src="./img/icon-close.png" alt="icon" className="nav__gall-close"/> : ''}</div> 
<div class="nav__gall-artem"><h3>Monument photo</h3></div>
<div class="nav__gall-history"><h3>Historical photos</h3></div>
    </div>
: ''}
 
   <PhotoStella/> 
   <LavraGallery isGalleryOpenLaurel ={isGalleryOpenLaurel } setIsGalleryOpenLaurel={setIsGalleryOpenLaurel }/>
   <Feedback isFeedback={isFeedback} setIsFeedback={setIsFeedback}/>
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

