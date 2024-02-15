import React from 'react';
import { useState } from 'react';
import Slideshow from './Slideshow';
import PhotoStella from './PhotoStella';
import LavraGallery from './LavraGallery';
import MonumentGallery from './MonumentGallery';
import HistoryGallery from './HistoryGallery';
import Feedback from './Feedback'


function MainPage() {
  const [isGalleryOpenLaurel , setIsGalleryOpenLaurel ] = useState(false);
  const [isFeedback, setIsFeedback] = useState(false);
  const [isGalleryOpenMonument , setIsGalleryOpenMonument ] = useState(false);
  const [isGalleryOpenHistory , setIsGalleryOpenHistory ] = useState(false);

  const [showPhotoGallery, setshowPhotoGallery] = useState(false);


  const clickShowPhotoGallery = () => {
    setshowPhotoGallery(!showPhotoGallery)
  }
  const handleLandscapeClick = () => {
    setIsGalleryOpenLaurel(!isGalleryOpenLaurel );
  };
  const handleMonumentClick = () => {
    setIsGalleryOpenMonument(!isGalleryOpenMonument );
  };
  const handleHistoryClick = () => {
    setIsGalleryOpenHistory(!isGalleryOpenHistory );
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
<li  class=""><a onClick={clickShowPhotoGallery} style={{color: showPhotoGallery ? '#ffa025' : ''}} >PHOTOGALLERY</a></li>
{/* <li   class=""><a href="#">PHOTOGALLERY</a></li> */}
<li   class=""><a href="#">VENUES</a></li>
<li   class=""><a href="#">PRESS</a></li>
<li   class=""><a onClick={handleFeedbackClick}>CONTACT</a></li>
</ul>										

				</nav>	
			</div>
		</div>
	</header>      
{showPhotoGallery ?
   <div class="nav"> 
<div class="nav__new"><h2>Svyatogorye photo gallery</h2></div>
 <div class="nav__gall-landscape" onClick={handleLandscapeClick}><h2>Landscape laurel</h2>{isGalleryOpenLaurel ? <img src="./img/icon-close.png" alt="icon" className="nav__gall-close"/> : ''}</div> 
<div class="nav__gall-artem" onClick={handleMonumentClick}><h2>Monument photo</h2>{isGalleryOpenMonument ? <img src="./img/icon-close.png" alt="icon" className="nav__gall-close"/> : ''}</div>
<div class="nav__gall-history" onClick={handleHistoryClick}><h2>Historical photos</h2>{isGalleryOpenHistory ? <img src="./img/icon-close.png" alt="icon" className="nav__gall-close"/> : ''}</div>
    </div>
: ''}
 
   <PhotoStella/> 
   <LavraGallery isGalleryOpenLaurel ={isGalleryOpenLaurel } setIsGalleryOpenLaurel={setIsGalleryOpenLaurel }/>
   <MonumentGallery isGalleryOpenMonument ={isGalleryOpenMonument} setIsGalleryOpenMonument={setIsGalleryOpenMonument }/>
   <HistoryGallery isGalleryOpenHistory={isGalleryOpenHistory} setIsGalleryOpenHistory={setIsGalleryOpenHistory}/>
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

