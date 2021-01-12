import React from 'react'
import clearIcon from '../UI/Files/cleartext-icon.svg'

const ClearButton = (props) => {
  return (
    <button className={props.className} type="button">
      <img src={clearIcon} alt="Очистить поле" onClick={props.onClick} />
    </button>
  )
}

export default ClearButton
