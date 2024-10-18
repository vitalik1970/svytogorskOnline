import React, { useState } from 'react';

function Feedback(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // const sendFeedback = () => {
  //   const data = {
  //     name: name,
  //     email: email,
  //     message: message,
  //   };

  //   // Добавляем email в объект data
  //   data.senderEmail = email;

  //   fetch('https://ytcenko1970.byethost12.com/send-email', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     mode: 'cors',
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       alert('Сообщение успешно отправлено');
  //     })
  //     .catch((error) => {
  //       console.error('Ошибка:', error);
  //     });
  // };
const closeFeedback = () =>{
  props.setIsFeedback(false)
}
  return (
  
    <div className='feedback__wrapper' style={{ display: props.isFeedback   ? 'block' : 'none' }}>
     
    <div className='feedback__container'>
    <button  className="feedback__close-button" onClick={closeFeedback}>
                            &times;
      </button>
      <div className='feedback__contact'>

<p>LOCATION OF THIS HISTORICAL AND NATURAL<br/>MONUMENT OBJECT</p>
<p>Ukraine, Donetsk region, Svyatogorsk city</p>

                <ul className="social">

                    <li className="social__item"><a href="https://www.instagram.com/iatsenko1748/"><img src="./img/icons/instagram.svg" alt="link instagram yatsenko v v"/></a></li>
                    <li className="social__item"><a  href="https://twitter.com/YcenkoVitalij"><span class="social__item-x"></span></a></li>
                    <li className="social__item"><a href="https://github.com/vitalik1970?tab=repositories"><img src="./img/icons/gitHub.svg" alt="Link"/></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/vitaliy-yatsenko-5806b5226/"><img src="./img/icons/linkedIn.svg" alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p> <a href="mailto:ytcenko1970@gmail.com" style={{color: "#fff"}}>ytcenko1970@gmail.com</a></p>
                    <p><a style={{color: "#fff"}} href="tel:+380953945157">+38 (095) 394-51-57</a></p>
        </div>
    </div> 

    <form name="contact" method="POST" className='feedbackform'  netlify>
      <p style={{color: '#fff', textAlign: 'center'}}>МЫ БУДЕМ ОЧЕНЬ ВАМ БЛАГОДАРНЫ, ЕСЛИ ВЫ ОСТАВИТЕ ОТЗЫВ О НАШЕМ САЙТЕ</p>
  <p>
     <input type="text" name="name"placeholder="NAME*" className='feedback__form'  />
  </p>
  {/* <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p> */}
  {/* <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p> */}
  <p>
    <textarea name="message" placeholder="MESSAGE*" className='feedback__form'></textarea>
  </p>
  <p>
    <button type="submit" className="button__form" >Send</button>
  </p>
</form>


    {/* <form id="feedbackForm" className='feedbackform' >
      <label htmlFor="name">Извините, форма временно недоступна. Напишите пожалуйста на электронный адрес или оставте сообщение в чате</label>
      <input type="text" id="name" disabled placeholder="NAME*" className='feedback__form' name="name" value={name} onChange={handleNameChange} />

      <label htmlFor="email"></label>
      <input type="email" id="email" disabled placeholder="EMAIL*" className='feedback__form'  name="email" value={email} onChange={handleEmailChange} />

      <label htmlFor="message"></label>
      <textarea id="message" disabled placeholder="MESSAGE*" className='feedback__form'  name="message" value={message} onChange={handleMessageChange}></textarea>

      <button className="button__form" disabled type="button" onClick={sendFeedback}>
        SEND
      </button>
    </form> */}

    </div>
    <div className='map__google'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10461.626843994178!2d37.56981345!3d49.04089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40df7fc7cf0c6fd1%3A0xa026fcdbeed1248e!2sSvyatohirs&#39;k%2C%20Donetsk%20Oblast%2C%20Ukraine%2C%2084130!5e0!3m2!1sen!2sus!4v1708180554765!5m2!1sen!2sus" style={{
                width: '100%',
                height: '350px',
                border: '0'
            }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
    </div>
    
  );
}

export default Feedback;
