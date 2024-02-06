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

    fetch('https://creategift.website/send-email', {
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
      <label htmlFor="name">Имя:</label>
      <input type="text" id="name" placeholder="enter name" name="name" value={name} onChange={handleNameChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="enter email" name="email" value={email} onChange={handleEmailChange} />

      <label htmlFor="message">Сообщение:</label>
      <textarea id="message" placeholder="enter message" name="message" value={message} onChange={handleMessageChange}></textarea>

      <button className="button__form" type="button" onClick={sendFeedback}>
        Отправить
      </button>
    </form>
    : ''}
    </>
  );
}

export default Feedback;
