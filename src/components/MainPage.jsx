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
  const [lan, setLan] = useState(false);
 


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
            	
      <div className="logo"><h1>СВЯТОГОРСКФОТО</h1></div>

      <div className="lng_btn ">
      <div className="nav__ru" onClick={() =>setLan(false) }>RU</div>
        <div className="nav__en" onClick={() =>setLan(true) }>EN</div>
        
    </div>
			</div>
      <hr/>
			<div className="header_wrap">
				<nav className="head_menu">
<ul className=""><li ><a href="./index.html">{lan ? 'HOME' : 'ДОМ'}</a></li>
<li  className=""><a onClick={clickShowPhotoGallery} style={{color: showPhotoGallery ? '#ffa025' : ''}} >{lan ? 'PHOTOGALLERY' : 'ФОТОГАЛЕРЕЯ'}</a></li>
{/* <li   class=""><a href="#">PHOTOGALLERY</a></li> */}
<li   className=""><a onClick={handleMessageClick} href="./disqus.html" style={{color: isMessage ? '#ffa025' : ''}}>{lan ? 'LEAVE FEEDBACK' : 'ОСТАВИТЬ ОТЗЫВ'}</a></li>
<li   className=""><a onClick={handlePurposeClick} href="./purpose_project.html"  style={{color: isPurpose ? '#ffa025' : ''}}>{lan ? 'PURPOSE PROJECT' : 'ЦЕЛЬ ПРОЕКТА'}</a></li>
{/* <li   className=""><a onClick={handleChatClick} href="./svytogorsk-chat/index.html"  style={{color: isFeedback ? '#ffa025' : ''}}>CHAT</a></li> */}
<li   className=""><a onClick={handleFeedbackClick} style={{color: isFeedback ? '#ffa025' : ''}}>{lan ? 'CONTACT' : 'КОНТАКТЫ'}</a></li>
</ul>										
				</nav>	
			</div>
		</div>
	</header>      
{showPhotoGallery ?
   <div className="nav"> 

 <div className="nav__gall-landscape" onClick={handleLandscapeClick}><h3>{lan ? 'Svyatogorsk Lavra' : 'СВЯТОГОРСКАЯ ЛАВРА'}</h3>{isGalleryOpenLaurel ? <img src="./img/icon-close.png" alt="icon" className="nav__gall-close"/> : ''}</div> 
<div class="nav__gall-artem" onClick={handleMonumentClick}><h3>{lan ? 'Monument photo' : 'ПАМЯТНИК АРТЕМА'}</h3>{isGalleryOpenMonument ? <img src="./img/icon-close.png" alt="icon" className="nav__gall-close"/> : ''}</div>
<div class="nav__gall-history" onClick={handleHistoryClick}><h3>{lan ? 'Historical photos' : 'ИСТОРИЧЕСКИЕ ФОТО'}</h3>{isGalleryOpenHistory ? <img src="./img/icon-close.png" alt="icon" className="nav__gall-close"/> : ''}</div>
    </div>
: ''}
  <div class="css-modal-details">    
      <details>
          <summary><h1>{lan ? 'TAXI SVYTOGORSK' : 'ТАКСИ СВЯТОГОРСКА'}</h1></summary>
          <div class="cmc">
              <div class="cmt">
                  <p class="width-text">Ищите не дорогое такси в городе Святогорске ?<br/> В настоящее время в городе работают несколько служб такси</p> <br/>
                  <p class="width-text">Служба такси "Своё такси 905". Набирайте короткий номер "905"</p> <br/>
                  <p class="width-text">Единая служба заказа такси 3202. Набирайте короткий номер "3202"</p> 

                      
              </div>
          </div>
      </details>
      </div>
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

