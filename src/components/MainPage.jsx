import React from 'react';
import { useState } from 'react';
import Slideshow from './Slideshow';
import PhotoStella from './PhotoStella';
import LavraGallery from './LavraGallery';
import MonumentGallery from './MonumentGallery';
import HistoryGallery from './HistoryGallery';
import Feedback from './Feedback';
// import DisqusComments from './DisqusComments';
// import Gratters from './Gratters';


function MainPage() {
  const [isGalleryOpenLaurel , setIsGalleryOpenLaurel ] = useState(false);
  const [isFeedback, setIsFeedback] = useState(false);
  const [isGalleryOpenMonument , setIsGalleryOpenMonument ] = useState(false);
  const [isGalleryOpenHistory , setIsGalleryOpenHistory ] = useState(false);
  const [isMessage, setIsMessage] = useState('');
  const [isPurpose, setIsPurpose] = useState(false); 
  const [showPhotoGallery, setshowPhotoGallery] = useState(false);
 


  const clickShowPhotoGallery = () => {
    setshowPhotoGallery(!showPhotoGallery);
    setIsGalleryOpenLaurel(false);
    setIsGalleryOpenMonument(false);
    setIsGalleryOpenHistory(false);
  }
  const handleMessageClick = () => {
    setIsMessage(!isMessage)
  }
  const handleLandscapeClick = () => {
    setIsGalleryOpenLaurel(!isGalleryOpenLaurel);
  };
  const handleMonumentClick = () => {
    setIsGalleryOpenMonument(!isGalleryOpenMonument);
  };
  const handleHistoryClick = () => {
    setIsGalleryOpenHistory(!isGalleryOpenHistory);
  };
  const handleFeedbackClick = () => {
    setIsFeedback(!isFeedback);
  };
  const handlePurposeClick = () => {
    setIsPurpose(!isPurpose);
  };
  return (
    <>
      <div className="main__wrapper">
        <Slideshow/>  
        <header className="transparent">
		<div className="container">
			<div className="header__top">
            	
      <div className="logo"><h2>SvytogorskOnline</h2></div>

			</div>
			<div className="header_wrap">
				<nav className="head_menu">
<ul className=""><li ><a href="./index.html">HOME</a></li>
<li  className=""><a onClick={clickShowPhotoGallery} style={{color: showPhotoGallery ? '#ffa025' : ''}} >PHOTOGALLERY</a></li>
{/* <li   class=""><a href="#">PHOTOGALLERY</a></li> */}
<li   className=""><a onClick={handleMessageClick} href="./disqus.html" style={{color: isMessage ? '#ffa025' : ''}}>LEAVE FEEDBACK</a></li>
<li   className=""><a onClick={handlePurposeClick} href="./purpose_project.html"  style={{color: isPurpose ? '#ffa025' : ''}}>PURPOSE PROJECT</a></li>
{/* <li   className=""><a onClick={handleChatClick} href="./svytogorsk-chat/index.html"  style={{color: isFeedback ? '#ffa025' : ''}}>CHAT</a></li> */}
<li   className=""><a onClick={handleFeedbackClick} style={{color: isFeedback ? '#ffa025' : ''}}>CONTACT</a></li>
</ul>										
				</nav>	
			</div>
		</div>
	</header>      
{showPhotoGallery ?
   <div className="nav"> 

 <div className="nav__gall-landscape" onClick={handleLandscapeClick}><h2>Landscape laurel</h2>{isGalleryOpenLaurel ? <img src="./img/icon-close.png" alt="icon" className="nav__gall-close"/> : ''}</div> 
<div class="nav__gall-artem" onClick={handleMonumentClick}><h2>Monument photo</h2>{isGalleryOpenMonument ? <img src="./img/icon-close.png" alt="icon" className="nav__gall-close"/> : ''}</div>
<div class="nav__gall-history" onClick={handleHistoryClick}><h2>Historical photos</h2>{isGalleryOpenHistory ? <img src="./img/icon-close.png" alt="icon" className="nav__gall-close"/> : ''}</div>
    </div>
: ''}
 
   <PhotoStella/> 
   <LavraGallery isGalleryOpenLaurel ={isGalleryOpenLaurel } setIsGalleryOpenLaurel={setIsGalleryOpenLaurel }/>
   <MonumentGallery isGalleryOpenMonument ={isGalleryOpenMonument} setIsGalleryOpenMonument={setIsGalleryOpenMonument }/>
   <HistoryGallery isGalleryOpenHistory={isGalleryOpenHistory} setIsGalleryOpenHistory={setIsGalleryOpenHistory}/>
   {/* <DisqusComments isMessage={isMessage} setIsMessage={setIsMessage}/> */}
   <Feedback isFeedback={isFeedback} setIsFeedback={setIsFeedback}/>
</div>
<a href='https://creategift.website/' title="creation of creative low-cost websites"></a>
<a href='https://proxiedmail.com/' title="Create proxy-email"></a>
<a href="https://meetsometimes.com/" title="site of interesting meetings"></a>
    </>
  )
}

export default MainPage

