import React from 'react';
import { useState } from 'react';
import Slideshow from './Slideshow';
import PhotoStella from './PhotoStella';
import LavraGallery from './LavraGallery';
import MonumentGallery from './MonumentGallery';
import HistoryGallery from './HistoryGallery';
import Feedback from './Feedback';
import DropdownInfrostr from './DropdownInfrostr';
import  DropdowPhoto from './DropdowPhoto';
import UploadPhotos from './UploadPhotos';
import LeaveReview from './LeaveReview';
import ShowVideo from './ShowVideo'
// import CookieConsent from '../CookieConsent';
// import DisqusComments from './DisqusComments';
// import Gratters from './Gratters';


function MainPage() {
  const [isGalleryOpenLaurel , setIsGalleryOpenLaurel ] = useState(false);
  const [isFeedback, setIsFeedback] = useState(false);
  const [isGalleryOpenMonument , setIsGalleryOpenMonument ] = useState(false);
  const [isGalleryOpenHistory , setIsGalleryOpenHistory ] = useState(false);
  const [isMessage, setIsMessage] = useState('');
  const [isPurpose, setIsPurpose] = useState(false); 
  const [showUploadPhoto, setshowUploadPhoto] = useState(false);
  const [lan, setLan] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [showVideo, setShowVideo] = useState(false);

  const handleMessageClick = () => {
    setIsMessage(!isMessage)
  }
  const handleLandscapeClick = () => {
    setIsGalleryOpenLaurel(!isGalleryOpenLaurel);
    setIsOpen(false);
  };
  const handleMonumentClick = () => {
    setIsGalleryOpenMonument(!isGalleryOpenMonument);
    setIsOpen(false);
  };
  const handleHistoryClick = () => {
    setIsGalleryOpenHistory(!isGalleryOpenHistory);
    setIsOpen(false);
  };
  const handleFeedbackClick = () => {
    setIsFeedback(!isFeedback);
    setIsOpen(!isOpen);
  };
  const handlePurposeClick = () => {
    setIsPurpose(!isPurpose);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleUploadPhoto = () => {
    setshowUploadPhoto(!showUploadPhoto);
    setIsOpen(false);
  };
  const handleVideoClick = () => {
    setShowVideo(!showVideo);
    setIsOpen(false);
  }; 
  return (
    <>
      <div className="main__wrapper">
        <Slideshow/>  
        <header className="transparent">
		<div className="container">
			<div className="header__top">
            	
      <div className="logo"><h1>СВЯТОГОРСК.ФОТО</h1></div>

      <div className="lng_btn ">
      {/* <div className="nav__ru" onClick={() =>setLan(false) }>RU</div>
        <div className="nav__en" onClick={() =>setLan(true) }>EN</div> */}
    </div>
    <div className="hamburger-menu">
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a className="lng_btn">
      {/* <div className="nav__ru" onClick={() =>setLan(false) }>RU</div>
        <div className="nav__en" onClick={() =>setLan(true) }>EN</div> */}
    </a></li>
    <li ><a onClick={handleVideoClick}  >{lan ? 'HOME' : 'видео'}</a></li>
    <li   class=""><DropdowPhoto activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} handleHistoryClick={handleHistoryClick} handleMonumentClick={handleMonumentClick} handleLandscapeClick={handleLandscapeClick} handleUploadPhoto={handleUploadPhoto} /></li>
    <li   class=""><DropdownInfrostr activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown}/></li>

      <li   className=""><a onClick={handleMessageClick} href="./disqus.html" style={{color: isMessage ? '#ffa025' : ''}}>{lan ? 'LEAVE FEEDBACK' : 'оставить отзыв'}</a></li>
<li   className=""><a onClick={handlePurposeClick} href="./purpose_project_ru.html"  style={{color: isPurpose ? '#ffa025' : ''}}>{lan ? 'PURPOSE PROJECT' : 'цель проекта'}</a></li>
<li   className=""><a onClick={handleFeedbackClick} style={{color: isFeedback ? '#ffa025' : ''}}>{lan ? 'contact' : 'контакты'}</a></li>
        </ul>
      </nav>
    </div>
			</div>
      <hr/>
			<div className="header_wrap">
				<nav className="head_menu">
<ul className="">
  <li ><a onClick={handleVideoClick}  >{lan ? 'HOME' : 'видео'}</a></li>

<li   className=""><DropdowPhoto  activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} handleHistoryClick={handleHistoryClick} handleMonumentClick={handleMonumentClick} handleLandscapeClick={handleLandscapeClick}  handleUploadPhoto={handleUploadPhoto}/></li>
<li   className=""><DropdownInfrostr  activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown}/></li>

<li   className=""><a onClick={handleMessageClick} href="./disqus.html" style={{color: isMessage ? '#ffa025' : ''}}>{lan ? 'LEAVE FEEDBACK' : 'оставить отзыв'}</a></li>
<li   className=""><a onClick={handlePurposeClick} href="./purpose_project_ru.html"  style={{color: isPurpose ? '#ffa025' : ''}}>{lan ? 'PURPOSE PROJECT' : 'цель проекта'}</a></li>
<li   className=""><a onClick={handleFeedbackClick} style={{color: isFeedback ? '#ffa025' : ''}}>{lan ? 'CONTACT' : 'контакты'}</a></li>
</ul>										
				</nav>	
			</div>
		</div>
	</header>      
 

   <PhotoStella/> 
   <LavraGallery isGalleryOpenLaurel ={isGalleryOpenLaurel } setIsGalleryOpenLaurel={setIsGalleryOpenLaurel }/>
   <MonumentGallery isGalleryOpenMonument ={isGalleryOpenMonument} setIsGalleryOpenMonument={setIsGalleryOpenMonument }/>
   <HistoryGallery isGalleryOpenHistory={isGalleryOpenHistory} setIsGalleryOpenHistory={setIsGalleryOpenHistory}/>
   {/* <DisqusComments isMessage={isMessage} setIsMessage={setIsMessage}/> */}
   <Feedback isFeedback={isFeedback} setIsFeedback={setIsFeedback}/>
   <UploadPhotos showUploadPhoto={showUploadPhoto} setshowUploadPhoto={setshowUploadPhoto}/>
   <LeaveReview setshowUploadPhoto={setshowUploadPhoto}/>
   <ShowVideo setShowVideo={setShowVideo} showVideo={showVideo}/>
  
</div>
{/* <a href='https://creategift.website/' title="creation of creative low-cost websites"></a> */}
<a href='https://proxiedmail.com/' title="Create proxy-email"></a>
<a href="https://meetsometimes.com/" title="site of interesting meetings"></a>

    </>
  )
}

export default MainPage;

