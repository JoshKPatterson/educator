import React from 'react'
import './MainCard.scss'

const MainCard = (props) => {
  return (
    <div className='mainCard'>
      {props.content}
    </div>
  )
}

export default MainCard
