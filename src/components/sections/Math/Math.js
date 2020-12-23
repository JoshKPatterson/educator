import React from 'react'
import Header from '../../smallParts/Header/Header'
import MainCard from '../../smallParts/MainCard/MainCard'

const Math = () => {
  const content = () => {
    return (
      <div className='math'>
        <Header sectionName='Math'/>
      </div>
    )
  }
  return (
    <MainCard content={content()} />
  )
}

export default Math
