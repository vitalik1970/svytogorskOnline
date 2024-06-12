import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div style={styles.container}>
      <p style={{fontSize: '15px', textAlign: 'center', margin: 'auto 0'}}>
      Our website uses cookies to improve your site experience, efficiency and usability. By continuing to use this site, you agree to the use of cookies.
      </p>
      <button onClick={handleAccept} style={styles.button}>Accept</button>
      <button onClick={handleAccept} style={styles.button1}>Privacy Policy</button>
    </div>    
  );
};

const styles = {
  container: {
    position: 'fixed',
    margin: '10px',
    right: '0',
     bottom: '0px',
    maxWidth: '1250px',
    display: 'flex',
    textAlign: 'left',
    color: '#fff',
    background: '#F7F7F8;',
     borderRadius: '8px',
     border: '1px solid #fff',
    padding: '5px',
    zIndex: '1000',
  },
  button: {
    marginLeft: '20px',
    padding: '8px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  button1: {
    marginLeft: '20px',
    padding: '5px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    border: 'none',
    cursor: 'pointer',
    width: '165px'
  }
};

export default CookieConsent;

