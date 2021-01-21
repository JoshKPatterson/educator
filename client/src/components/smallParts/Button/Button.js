import React from 'react'
import './Button.scss'

const Button = ({ children }) => {
  return (
    <button className='buttonProp'>
      {children}
    </button>
  )
}

export default Button
