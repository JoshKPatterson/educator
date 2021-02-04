// Import React
import React from 'react'

// Import Components
import Header from "../../smallParts/Header/Header";
import MainCard from "../../smallParts/MainCard/MainCard";
import Title from "../../smallParts/Title/Title";
import ReturnToMenu from "../../smallParts/ReturnToMenu/ReturnToMenu";

// Import Styles
import './Results.scss'

const Results = () => {
  return (
    <MainCard>
      <div className='results'>
        <Title />
        <Header sectionName='Results' />
        <h3>Activity Name</h3>
        <h3>Score</h3>
      </div>
      <ReturnToMenu />
    </MainCard>
  )
}

export default Results
