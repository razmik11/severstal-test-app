import React from 'react'
import './ToggleMenu.css'
import analyticsPic from '../UI/Files/analytics.svg'
import notifyPic from '../UI/Files/notifications.svg'

const ToggleMenu = () => {
  return (
    <div className="toggle-menu">
      <div className="disabled-item">
        <img src={analyticsPic} alt="Аналитика" />
        <span>Аналитика</span>
      </div>
      <div className="toggle-item notify">
        <img src={notifyPic} alt="Уведомления" />
        <span>Уведомления</span>
      </div>
    </div>
  )
}

export default ToggleMenu
