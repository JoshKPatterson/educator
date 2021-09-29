// Import React
import React from "react";

// Import Redux
import { connect } from "react-redux";

// Import Components
import Title from "../smallParts/Title";
import Header from "../smallParts/Header";
import MainCard from "../smallParts/MainCard";
import ReturnToMenu from "../smallParts/ReturnToMenu";
import Chart from "../smallParts/Chart";

// Profile Component
const Profile = (props) => {
  const { user } = props;
  const data = {
    labels: ["Math", "Geography"],
    datasets: [
      {
        label: "Time Spent",
        data: [
          user.stats.sections.math.activities_attempted,
          user.stats.sections.geography.activities_attempted
        ],
        backgroundColor: [
          "#8AC0DE" /* Blue */,
          "#F3DDB3" /* Yellow */,
          "#FEADB9" /* Pink */,
        ],
      },
    ],
  };


  // user.stats.sections.math.average_grade
  const averages = {
    math: user.stats.sections.math.average_grade.length > 0 ? Math.round((user.stats.sections.math.average_grade.reduce((a, b) => a + b) / user.stats.sections.math.average_grade.length)) : 0,

    geography: user.stats.sections.geography.average_grade.length > 0 ? Math.round((user.stats.sections.geography.average_grade.reduce((a, b) => a + b) / user.stats.sections.geography.average_grade.length)) : 0,
  }

  return (
    <MainCard>
      <div className="profile">
        <Title />
        <Header sectionName="Profile" />
        <h2><span>{user.name}</span></h2>
        <div className='profile__body'>
        {data.datasets[0].data.reduce((a, b) => a + b, 0) ? (
          <Chart data={data} />
        ) : null}
        <h3>Sections</h3>
        <h4>Math</h4>
        <p>
          Assessments Attempted: {user.stats.sections.math.activities_attempted}
        </p>
        <p>Average Grade: {averages.math}%</p>
        <h4>Geography</h4>
        <p>
          Assessments Attempted: {user.stats.sections.geography.activities_attempted}
        </p>
        <p>Average Grade: {averages.geography}%</p>
        </div>
        
        <ReturnToMenu />
      </div>
    </MainCard>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Profile);
