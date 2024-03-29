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
import { Helmet } from 'react-helmet';


function MainPage() {
  const [isGalleryOpenLaurel , setIsGalleryOpenLaurel ] = useState(false);
  const [isFeedback, setIsFeedback] = useState(false);
  const [isGalleryOpenMonument , setIsGalleryOpenMonument ] = useState(false);
  const [isGalleryOpenHistory , setIsGalleryOpenHistory ] = useState(false);
  const [isMessage, setIsMessage] = useState('');

  const [showPhotoGallery, setshowPhotoGallery] = useState(false);


  const clickShowPhotoGallery = () => {
    setshowPhotoGallery(!showPhotoGallery)
  }
  const handleMessageClick = () => {
    setIsMessage(!isMessage)
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
    <>
    <Helmet>
      <title>Svyatogorsk in photographs</title>
      <link rel="canonical" href="https://svyatogorsk.online/" />
      <meta name="google-site-verification" content="qJXzHcl4xTnWqFCbMM9ngds8qYmW9BDu2HS3pxiqqhA" />
    <meta property="title" content="photographs of the city of Svyatogorsk, Svyatogorsk Lavra and the Holy Mountains reserve, monument to Artem, Seversky Donets river, monastic monastery"/>
    <meta name="keywords" content="photographs of the city of Svyatogorsk, Svyatogorsk Lavra and the Holy Mountains reserve, monument to Artem, Seversky Donets river, monastic monastery, bridge over the river"/>
    <meta name="description" content="Sights of Svyatogorsk Lavra, Svyatogorsk National Reserve, the Holy Mountains reserve, the city of Svyatogorsk, Donetsk region, Kramatorsk region of Ukraine in photographs
    "/>
    </Helmet>
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
{/* <li   className=""><a onClick={handleFeedbackClick} href="./purpose_project.html"  style={{color: isFeedback ? '#ffa025' : ''}}>PURPOSE PROJECT</a></li> */}
<li   className=""><a onClick={handleFeedbackClick} style={{color: isFeedback ? '#ffa025' : ''}}>CONTACT</a></li>
</ul>										
				</nav>	
			</div>
		</div>
	</header>      
{showPhotoGallery ?
   <div className="nav"> 
<div className="nav__new"><h2>Svyatogorye photo gallery</h2></div>
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
    </>
  )
}

export default MainPage

