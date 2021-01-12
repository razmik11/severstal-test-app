import React from 'react'
import './Notifications.css'
import NotifyContent from './NotifyContent/NotifyContent'
import NotifyTitle from './NotifyTitle/NotifyTitle'

const Notifications = () => {
  return (
    <div>
      <NotifyTitle />
      <NotifyContent />
    </div>
  )
}

export default Notifications
