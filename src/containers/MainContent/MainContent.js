import React from 'react'
import Notifications from '../../components/Notifications/Notifications'
import ToggleMenu from '../../components/ToggleMenu/ToggleMenu'
import './MainContent.css'

const MainContent = () => {
  return (
    <div className="main-content">
      <ToggleMenu />
      <Notifications />
    </div>
  )
}

export default MainContent
