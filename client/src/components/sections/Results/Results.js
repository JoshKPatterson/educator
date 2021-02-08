// Import React
import React, { useEffect, useState } from 'react'

// Import Redux
import { connect } from "react-redux";
import { updateUserData, clearActivity } from '../../../actions/activityActions'

// Import Components
import Header from "../../smallParts/Header/Header";
import MainCard from "../../smallParts/MainCard/MainCard";
import Title from "../../smallParts/Title/Title";
import ReturnToMenu from "../../smallParts/ReturnToMenu/ReturnToMenu";

// Import Styles
import './Results.scss'

const Results = (props) => {
  const [name, setName] = useState(null);
  const [score, setScore] = useState(null);

  useEffect(() => {
    setName(props.activity.activityName);
    setScore(props.activity.score)
    // post results to database

    // create object with data to be posted
    const data = {
      genre: props.activity.genre,
      score: Math.round((props.activity.score / props.activity.questionCount) * 100),
      id: typeof props.user._id !== 'undefined' ? props.user._id : props.user.id
    }

    console.log(data)

    // attempt to post
    props.updateUserData(data);
    props.clearActivity();
  }, [])

  return (
    <MainCard>
      <div className='results'>
        <Title />
        <Header sectionName='Results' />
        <h3>Activity Name: {name}</h3>
        <h3>Score: {score}</h3>
      </div>
      <ReturnToMenu />
    </MainCard>
  )
}

// Map Activity Prop
const mapStateToProps = state => ({
  activity: state.activity,
  user: state.auth.user
})

export default connect(mapStateToProps, { updateUserData, clearActivity })(Results)
