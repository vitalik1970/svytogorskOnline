import {React, useState, useEffect} from 'react'

function  LeaveReview() {
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
    
}

  return (
    
    <div className="feedback-message" style={{display: leaveReview ? 'block' : 'none'}}>
      Оставьте пожалуйста <a href="/disqus.html">отзыв о сайте</a>
      <span className="close-message" onClick={closeMessage}>Закрыть</span>
      </div>
    
  )
}

export default  LeaveReview
