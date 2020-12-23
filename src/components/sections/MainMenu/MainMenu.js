import React from 'react'
import Header from '../../smallParts/Header/Header';
import MainCard from '../../smallParts/MainCard/MainCard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './MainMenu.scss'

const MainMenu = () => {

  const content = () => {
    return (
      <div className='mainMenu'>
        <Header sectionName='Main Menu' />
        <Link to='/math'>Math</Link>
        <Link to='/geography'>Geography</Link>
      </div>
    )
  }
  
  return (
    <MainCard content={content()} /> 
  )
}

export default MainMenu
