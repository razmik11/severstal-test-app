import React, { useState } from 'react'
import './NotifyContent.css'
import imageIcon from '../../UI/Files/image-arrow.svg'
import ClearButton from '../../ClearButton/ClearButton'

const NotifyContent = () => {
  const [titleText, setTitleText] = useState('')
  const [notifyText, setNotifyText] = useState('')
  const [imgText, setImgText] = useState('')

  const titleInputHandler = (event) => {
    setTitleText(event.target.value)
  }

  const notifyInputHandler = (event) => {
    setNotifyText(event.target.value)
  }

  const imgInputHandler = (event) => {
    setImgText(event.target.value)
  }

  const clearTitleInput = () => {
    setTitleText('')
  }

  const clearNotifyInput = () => {
    setNotifyText('')
  }

  const clearImgInput = () => {
    setImgText('')
  }

  return (
    <div className="notify-content">
      <h4 className="notify-content-title">Информация</h4>
      {/* <TitleInput imgsrc={clearIcon} onClick={clearTitleInput} inputValue={titleText}/> */}
      <div className="title-input-form">
        <label htmlFor="title-input">Название уведомления</label>
        <div>
          <input
            id="title-input"
            placeholder="Укажите текст заголовка"
            value={titleText}
            onChange={(event) => titleInputHandler(event)}
          />
          <ClearButton className="clear-title-icon" onClick={clearTitleInput} />
        </div>
      </div>
      <div className="text-input-form">
        <label htmlFor="text-input">Текст уведомления</label>
        <div>
          <textarea
            id="text-input"
            placeholder="Введите текст уведомления"
            value={notifyText}
            onChange={(event) => notifyInputHandler(event)}
          />
          <ClearButton className="clear-text-icon" onClick={clearNotifyInput} />
        </div>
      </div>
      <div className="img-input-form">
        <label className="img-input-title" htmlFor="img-input">
          Прикрепить изображение
        </label>
        <div className="img-input-wrapper">
          <div className="img-input-div">
            <input
              id="img-input"
              placeholder="Укажите прямую ссылку на изображение"
              value={imgText}
              onChange={(event) => imgInputHandler(event)}
            />
            <ClearButton className="clear-img-icon" onClick={clearImgInput} />
          </div>
          <div className="photo-button">
            <img
              src={imageIcon}
              alt="Загрузить фото"
              className="img-button-icon"
            />
            <div className="photo-input">
              <input
                id="file-input"
                type="file"
                name="Фото"
                multiple
                accept="image/*,image/jpeg"
              />
              <label htmlFor="file-input">Обзор</label>
            </div>
          </div>
        </div>
      </div>
      <span className="phone-preview">Предпросмотр</span>
      <div className="phone-wrapper">
        <div className="phone-pic">
          <span className="phone-title">
            {titleText || 'Укажите текст заголовка'}
          </span>
          <span className="phone-notify">
            {notifyText || 'Введите текст уведомления'}
          </span>
        </div>
        <button className="send-btn">
          <span>Отправить</span>
        </button>
      </div>
    </div>
  )
}

export default NotifyContent
