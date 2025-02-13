import React, { useState  } from 'react';
import { supabase } from './supabase';

const UploadForm = (props) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [userName, setUserName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(false);
  const [errorr, setErrorr] = useState(false);
 console.log(file, 'file');
  const handleUpload = async () => {
    event.preventDefault(); 
  
        if (!file) {
        setErrorr(true);
        return;
      }
      
      if (!userName.trim() || !description.trim()) {
        setError(true);
        return;
      }
      console.log(errorr, 'errorr');
    setUploading(true);

    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from('svytogorsk-photo')
      .upload(fileName, file);
   
    if (error) {
      console.error('Ошибка загрузки:', error);
      setUploading(false);
      return;
    }
   
    const publicUrl = supabase.storage.from('svytogorsk-photo').getPublicUrl(fileName).data.publicUrl;
    setImageUrl(publicUrl);
    
    const { error: dbError } = await supabase.from('photos_metadata').insert([
      {
        file_name: fileName,
        public_url: publicUrl,
        user_name: userName,
        description: description,
        created_at: new Date(),
      }
    ]);

    if (dbError) {
      console.error('Ошибка сохранения в базу:', dbError);
    } else {
      console.log('Данные сохранены в базу');
    }

    setUploading(false);
    setUserName('');
    setDescription('');
    setFile(null);
  };

  const closeUploadPhotos = () =>{
    props.setshowUploadPhoto(false)
  }
  

  return (
    <div className='feedback__wrapper' style={{ display: props.showUploadPhoto   ? 'block' : 'none' }}>
         <button  className="feedback__close-button" onClick={closeUploadPhotos}>
                            &times;
      </button>
        <p className="photos__text-header">Загрузите личное фото связанное с городом Святогорск: прогулки, природа, памятные места, архитектура или яркие моменты из жизни.</p> 
        <p className="photos__text-requirements">📌 Требования к фото:<br/> 
        ✅ Форматы: JPG, PNG<br/> 
        ✅ Максимальный размер: 3 MB<br/> 
        ❌ Не загружайте изображения с текстами, логотипами или посторонними элементами.</p>
         <form name="contact" method="POST" className='feedbackform'  onSubmit={handleUpload} > 
         
            {error ? (
                <div className="form__text-error">
                  <span style={{verticalAlign: "middle"}}>!</span>
                  <p>Введите имя и описание!</p>
                </div>
            ) : (
                ""
            )}
        <p>
           <input type="text" name="name" placeholder="ИМЯ*" className='feedback__form' value={userName} onChange={(e) => setUserName(e.target.value)} />
        </p>
       <p>
          <input type="text" style={{color: "#fff"}} placeholder="ОПИСАНИЕ ФОТО*" className='photos__input-desc' value={description} onChange={(e) => setDescription(e.target.value, setError(false))} />
        </p>
       
        <div className="custom-file-upload">
        {errorr ? (
                <div className="form__text-error">
                  <span style={{verticalAlign: "middle"}}>!</span>
                  <p>Выберите файл!</p>
                </div>
            ) : 
                ""
            }
      <label htmlFor="file-input" className="button__form">
        {file ? file.name : 'Выбирите файл'}
      </label>
      <input
        id="file-input"
        type="file"
        className="custom-file-input"
        onChange={(e) => setFile(e.target.files[0], setErrorr(false))}
      />
    </div>
       
        <p>
          <button onClick={handleUpload} className="button__form" disabled={uploading}>
        {uploading ? 'Загрузка...' : 'Загрузить'}
      </button>
        </p>
      
      </form>

      {imageUrl && <p className="photos__text-footer">Ваше фото успешно загружено!<br/> Что бы просмотреть, зайдите во вкладку фотогалерея/фото пользователей</p> }
    </div>
  );
};

export default UploadForm;