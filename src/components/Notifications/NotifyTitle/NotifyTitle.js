import React from 'react'
import './NotifyTitle.css'

const NotifyTitle = () => {
  return (
    <div className="notify-toggle">
      <span className="active-notify">Глобальные объявления</span>
      <span className="disabled-notify">Отправить на группу</span>
      <span className="disabled-notify right">Контент-уведомления</span>
    </div>
  )
}

export default NotifyTitle
