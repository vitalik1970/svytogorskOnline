import {React, useState, useEffect} from 'react'

function  LeaveReview(props) {
    const [leaveReview, setLeaveReview] = useState(false);

    useEffect(() => {
      const asd = localStorage.getItem('contentRevi');
      if (!asd) {
         setTimeout(function() {
        setLeaveReview(true)
      }, 10000);
      }
    },[]);
   

const closeMessage = () => {
    setLeaveReview(false);
    localStorage.setItem('contentRevi', 'false')
    
};
const showUploadPhoto = () => {
  props.setshowUploadPhoto(true)
}

  return (
    
    <div className="feedback-message" style={{display: leaveReview ? 'block' : 'none'}}>
      Оставьте пожалуйста <a href="/disqus.html">отзыв о сайте</a>
      <span className="close-message" onClick={closeMessage}>Закрыть</span><br/>
     <p >Вы можете <span onClick={showUploadPhoto} style={{textDecoration: "underline", color: "#009bff", cursor: "pointer"}} >загрузить </span>свои фото на сайт!</p> 
      </div>
    
  )
}

export default  LeaveReview;
