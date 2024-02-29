import React, { useState, useEffect } from 'react';

function Gratters(props) {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [feedbackListState, setFeedbackListState] = useState([]);
    console.log(feedbackListState, 'feedbackListState');
    const closeGratters = () => {
        props.setIsMessage(false)
    }
    useEffect(() => {
        const savedFeedbackList = localStorage.getItem('feedbackList');
        console.log(savedFeedbackList, 'savedFeedbackList '); 
        if (savedFeedbackList) {
            setFeedbackListState(JSON.parse(savedFeedbackList));
        }
    }, []); // Этот эффект будет запущен только один раз после первого рендера

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim() !== '' && message.trim() !== '') {
            const newFeedback = { name, message };
            console.log(newFeedback, 'newFeedback ');
            setFeedbackListState([...feedbackListState, newFeedback]); // Обновляем состояние feedbackList
            setName('');
            setMessage('');

            // Сохраняем обновленный список отзывов в локальное хранилище
            localStorage.setItem('feedbackList', JSON.stringify([...feedbackListState, newFeedback]));
        } else {
            alert('Please, enter name and message');
        }
    };
    const handleRemove = (index) => {
        let info = prompt("Attention! You cannot delete a message. If you need to do this, please email");
        if (info === '12345'){
            const updatedFeedbackList = [...feedbackListState];
            updatedFeedbackList.splice(index, 1);
            setFeedbackListState(updatedFeedbackList);
            localStorage.setItem('feedbackList', JSON.stringify(updatedFeedbackList));
        } 
    };
    return (
        <>  
        {props.isMessage ?
        <div className="gratters">
            <button className="close-btn" onClick={closeGratters}>CLOSE</button>
            <p>PLEASE LEAVE YOUR FEEDBACK, IT IS VERY IMPORTANT TO US</p>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" name="name" value={name} onChange={handleNameChange} placeholder="NAME*" className="input1" />
                <textarea id="message" name="message" type="text" value={message} onChange={handleMessageChange} placeholder="MESSAGE*" className="input1" />
                <button type="submit" className="publish-btn">SUBMIT</button>
            </form>
            <div className="list">
                {feedbackListState.map((feedback, index) => (
                    <div key={index} className="message">
                       <div> <strong>{feedback.name}:</strong>: {feedback.message}
                        </div><span className="remove" onClick={() => handleRemove(index)}>&times;</span>
                    </div>
                ))}
            </div>
        </div>
         : ''}</>
    );
}

export default Gratters;
