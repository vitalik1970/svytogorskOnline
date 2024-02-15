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

  const sendFeedback = () => {
    const data = {
      name: name,
      email: email,
      message: message,
    };

    // Добавляем email в объект data
    data.senderEmail = email;

    fetch('https://ytcenko1970.byethost12.com/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Сообщение успешно отправлено');
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  };

  return (
    <>
    {props.isFeedback ?
    <form id="feedbackForm">
      <label htmlFor="name"></label>
      <input type="text" id="name"  placeholder="NAME*" className='feedback__form' name="name" value={name} onChange={handleNameChange} />

      <label htmlFor="email"></label>
      <input type="email" id="email" placeholder="EMAIL*" className='feedback__form'  name="email" value={email} onChange={handleEmailChange} />

      <label htmlFor="message"></label>
      <textarea id="message" placeholder="MESSAGE*" className='feedback__form'  name="message" value={message} onChange={handleMessageChange}></textarea>

      <button className="button__form" type="button" onClick={sendFeedback}>
        SEND
      </button>
    </form>
    : ''}
    </>
  );
}

export default Feedback;
