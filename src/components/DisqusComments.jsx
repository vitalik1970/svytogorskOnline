import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const DisqusComments = (props) => {
  useEffect(() => {
    // Функция, которая вставляет скрипт для загрузки Disqus
    const loadDisqus = () => {
      window.disqus_config = function () {
        this.page.url = "https://svyatogorsk.online"; // Замените на URL вашей страницы
        this.page.identifier = "svyatogorsk.html"; // Замените на уникальный идентификатор вашей страницы
      };

      const s = document.createElement('script');
      s.src = 'https://svyatogorsk-online.disqus.com/embed.js';
    //   s.async = true;
    //   s.defer = true;
      document.body.appendChild(s);
    };

    // Вызов функции для загрузки Disqus после монтирования компонента
    loadDisqus();
  }, []);

  return (
    <>
      {props.isMessage ?  (<div id="disqus_thread">yyy</div>) : ''}
    </>
  );
};

export default DisqusComments;
