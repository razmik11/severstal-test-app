import React from 'react'
import logo from '../../components/UI/Files/logo.svg'
import headerArrow from '../../components/UI/Files/arrow-down.svg'
import './Header.css'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Логотип Северсталь" className="logo" />
      <div className="profile">
        <span>Severstal\av.barudzin</span>
        <div className="profile-pic" />
        <img src={headerArrow} alt="Подробнее" className="profile-arrow" />
      </div>
    </header>
  )
}

export default Header
