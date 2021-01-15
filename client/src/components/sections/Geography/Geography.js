import React from 'react'
import Header from '../../smallParts/Header/Header';
import MainCard from '../../smallParts/MainCard/MainCard';

const Geography = () => {
  const content = () => {
    return (
      <div className='geography'>
        <Header sectionName='Geography' />
      </div>
    )
  }
  return (
    <MainCard content={content()} />
  )
}

export default Geography
