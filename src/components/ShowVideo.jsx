import React from "react";

const ShowVideo = (props) => {

    const closeShowVideo = () =>{
        props.setShowVideo(false);
      }
    
  return (
    <div className='feedback__wrapper' style={{ display: props.showVideo   ? 'block' : 'none' }}>
     
    
    <button  className="feedback__close-button" onClick={closeShowVideo}>
                            &times;
      </button>
    <h1 className="showvideo__h1">Красивые видео о Святоорске</h1>
    <div  className="showvideo__">
    


    <div  className="showvideo__img">
      <a href="https://www.youtube.com/embed/EJ8lkELH7J4" target="_blank" rel="noopener noreferrer">
        <div className="__img">
        <img src="/img/video/reflection.png" alt="Отражение Святогорской Лавры в Северском Донце" />
        </div>
      </a>
      <h2 style={{fontSize: "16px", color: "#fff", textAlign: "center", maxWidth: "280px"}}>Восстановления моста ведущего в Святогорскую Лавру через Северский Донец</h2>
    </div>

    <div  className="showvideo__img">
      <a href="https://youtu.be/Jjrr2pdcc8w" target="_blank" rel="noopener noreferrer">
      <div className="__img">
        <img src="/img/video/saund-s.png" alt="Святогорск, вид на Лавру с моста через Северский Донец" />
        </div>
      </a>
      <h2 style={{fontSize: "16px", color: "#fff", textAlign: "center", maxWidth: "280px"}}>Красивая песня о Святогорске и видео Святогорской Лавры с высоты</h2>
    </div>

    <div  className="showvideo__img">
      <a href="https://youtu.be/bTMpkZ-ZOlQ" target="_blank" rel="noopener noreferrer">
      <div className="__img">
        <img src="/img/video/svytogorsk-mon.png" alt="Святогорск с горы памятника Артёму" />
        </div>
      </a>
      <h2 style={{fontSize: "16px", color: "#fff", textAlign: "center", maxWidth: "280px"}}>Святогорск с горы памятника Артёму</h2>
    </div>


    <div  className="showvideo__img">
      <a href="https://youtube.com/shorts/Ti-vzCnetiQ" target="_blank" rel="noopener noreferrer">
      <div className="__img">
        <img src="/img/video/easter-sunday.png" alt="Свято-Успенская Святогорская Лавра. Колокольный звон" />
        </div>
      </a>
      <h2 style={{fontSize: "16px", color: "#fff", textAlign: "center", maxWidth: "280px"}}>Свято-Успенская Святогорская Лавра. Колокольный звон.Пасхальное Воскресение </h2>
    </div>
     
    <div  className="showvideo__img">
      <a href="https://youtube.com/shorts/EwFIdEsRspk?feature=share" target="_blank" rel="noopener noreferrer">
      <div className="__img">
        <img src="/img/video/assumption-cathedral.png" alt="Служба в Успенском собору Святогорской лавры" />
        </div>
      </a>
      <h2 style={{fontSize: "16px", color: "#fff", textAlign: "center", maxWidth: "280px"}}>Пасхальная служба в Успенском соборе Святогорской лавры</h2>
    </div>

    </div>
    </div>
  );
};

export default ShowVideo;

