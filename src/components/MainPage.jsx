import React from 'react';
import { useState } from 'react';
import Slideshow from './Slideshow';
import PhotoStella from './PhotoStella';
import LavraGallery from './LavraGallery';
import MonumentGallery from './MonumentGallery';
import HistoryGallery from './HistoryGallery';
import Feedback from './Feedback';
import CookieConsent from '../CookieConsent';
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
  const [isOpen, setIsOpen] = useState(false);
  
 


  const clickShowPhotoGallery = () => {
    setshowPhotoGallery(!showPhotoGallery);
    setIsGalleryOpenLaurel(false);
    setIsGalleryOpenMonument(false);
    setIsGalleryOpenHistory(false);
    setIsOpen(!isOpen);
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
    setIsOpen(!isOpen);
  };
  const handlePurposeClick = () => {
    setIsPurpose(!isPurpose);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
      <div className="nav__ru" onClick={() =>setLan(false) }>RU</div>
        <div className="nav__en" onClick={() =>setLan(true) }>EN</div>
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
      <div className="nav__ru" onClick={() =>setLan(false) }>RU</div>
        <div className="nav__en" onClick={() =>setLan(true) }>EN</div>
    </a></li>

    <li  className=""><a onClick={clickShowPhotoGallery} style={{color: showPhotoGallery ? '#ffa025' : ''}} >{lan ? 'PHOTOGALLERY' : 'фотогалерея'}</a></li>
          <li> <a className="css-modal-details">    
      <details>
          <summary><h1>{lan ? 'TRANSPORT' : 'транспорт'}</h1></summary>
          <div className="cmc">
              <div className="cmt">
                  <div className="width-text">Ищите не дорогое такси в городе Святогорске?<br/> В настоящее время в городе работают несколько служб такси</div> 
                  <div className="width-text-905">
                  <div className="width-text">Служба такси "Своё такси 905". Набирайте короткий номер "905"</div> <img src="./img/905.png" alt="icon" className=""/> </div>
                  <div className="width-text-905">
                  <div className="width-text">Единая служба заказа такси 3202, работает только межгород. Набирайте короткий номер "3202"</div><img src="./img/3202.jpg" alt="icon" className=""/>  </div>
              </div>
          </div>
      </details>
      </a></li>
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
  <li ><a href="./index.html">{lan ? 'HOME' : 'дом'}</a></li>
<li  className=""><a onClick={clickShowPhotoGallery} style={{color: showPhotoGallery ? '#ffa025' : ''}} >{lan ? 'PHOTOGALLERY' : 'фотогалерея'}</a></li>
{/* <li   class=""><a href="#">PHOTOGALLERY</a></li> */}
 <div className="css-modal-details">    
      <details>
          <summary>{lan ? 'TRANSPORT' : 'транспорт'}</summary>
          <div className="cmc">
              <div className="cmt">
                  <div className="width-text"> В настоящее время в Святогорск можно добраться социальным рейсовым АВТОБУСОМ который отправляется в 12.30 из г. Краматорск и в 13.00 из г.Славянск по четвергам<br/>(Святогорск-Славянск по вторникам временно отменён)<br/> <br/>  В остальные дни можно воспользоватся службами ТАКСИ</div> 
                  <div className="width-text-905">
                  <div className="width-text">Служба такси "Своё такси 905", короткий номер "905"</div> <img src="./img/905.png" alt="icon" className=""/> </div>
                  <div className="width-text-905">
                  <div className="width-text">Служба заказа такси 3202, работает только на межгород, короткий номер "3202"</div><img src="./img/3202.jpg" alt="icon" className=""/>  </div>
                  <br/>
                  <div className="width-text">Через ЖД вокзал ходит ПОЕЗД Изюм — Лиман, расписание следующее <br/>                
                   №6901 Изюм– 5:00 Святогорск — 5:50 Лиман – 7:18<br/>
                   №6902 Лиман – 7:35 Святогорск – 9:01 Изюм – 9:53<br/>
                   №6903 Изюм – 13:00 Святогорск — 13:50 Лиман – 15:18<br/>
                   №6904 Лиман – 15:40 Святогорск – 17:06 Изюм – 17:58<br/>
              </div> 
             
             <div style={{marginTop: "5px", marginBottom: "5px"}}>Так сейчас выглядит железнодорожная станция Святогорск </div>
              <img src='./img/railway.jpeg' width="500" height="500" alt='photo reilway station'/>
              <div style={{marginTop: "5px", marginBottom: "5px"}}>Так она выглядила раньше</div>
              <img src='./img/railway2.jpg' width="500" height="500" alt='photo reilway station'/>
              </div>
          </div>
      </details>
      </div>
<li   className=""><a onClick={handleMessageClick} href="./disqus.html" style={{color: isMessage ? '#ffa025' : ''}}>{lan ? 'LEAVE FEEDBACK' : 'оставить отзыв'}</a></li>
<li   className=""><a onClick={handlePurposeClick} href="./purpose_project_ru.html"  style={{color: isPurpose ? '#ffa025' : ''}}>{lan ? 'PURPOSE PROJECT' : 'цель проекта'}</a></li>
{/* <li   className=""><a href="./index_img.html"  style={{color: isFeedback ? '#ffa025' : ''}}>CHAT</a></li> */}
<li   className=""><a onClick={handleFeedbackClick} style={{color: isFeedback ? '#ffa025' : ''}}>{lan ? 'CONTACT' : 'контакты'}</a></li>
</ul>										
				</nav>	
			</div>
		</div>
	</header>      
{showPhotoGallery ?
   <div className="nav"> 

 <div className="nav__gall-landscape" onClick={handleLandscapeClick}><h3>{lan ? 'Svyatogorsk Lavra' : 'святогорская лавра'}</h3>{isGalleryOpenLaurel ? <img src="./img/icon-close.png" alt="icon" className="nav__gall-close"/> : ''}</div> 
<div class="nav__gall-artem" onClick={handleMonumentClick}><h3>{lan ? 'Monument photo' : 'памятник артема'}</h3>{isGalleryOpenMonument ? <img src="./img/icon-close.png" alt="icon" className="nav__gall-close"/> : ''}</div>
<div class="nav__gall-history" onClick={handleHistoryClick}><h3>{lan ? 'Historical photos' : 'исторические фото'}</h3>{isGalleryOpenHistory ? <img src="./img/icon-close.png" alt="icon" className="nav__gall-close"/> : ''}</div>
<div class="nav__gall-ruined"><a href="./index_img.html"><h3>{lan ? 'RUINED CITY' : 'война'}</h3></a></div>
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

