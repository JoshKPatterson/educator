// Import React
import React from "react";

// Import Redux
import { connect } from "react-redux";

// Import Components
import Title from "../../smallParts/Title/Title";
import Header from "../../smallParts/Header/Header";
import MainCard from "../../smallParts/MainCard/MainCard";
import ReturnToMenu from "../../smallParts/ReturnToMenu/ReturnToMenu";
import Chart from "../../smallParts/Chart/Chart";

// Import Styles
import "./Profile.scss";

// Profile Component
const Profile = (props) => {
  const { user } = props;
  const data = {
    labels: ["Math", "Geography", "English"],
    datasets: [
      {
        label: "Time Spent",
        // data: [0, 0, 0],
        data: [
          user.stats.sections.math.activities_attempted,
          user.stats.sections.geography.activities_attempted,
          0,
        ],
        backgroundColor: [
          "#8AC0DE" /* Blue */,
          "#F3DDB3" /* Yellow */,
          "#FEADB9" /* Pink */,
        ],
      },
    ],
  };

  const dataCheck = data.datasets[0];

  // user.stats.sections.math.average_grade

  return (
    <MainCard>
      <div className="profile">
        <Title />
        <Header sectionName="Profile" />
        <h2>{user.name}</h2>
        {data.datasets[0].data.reduce((a, b) => a + b, 0) ? (
          <Chart data={data} />
        ) : null}
        {/* <Chart data={data} /> */}
        <h3>Sections</h3>
        <h4>Math</h4>
        <p>
          Assessments Attempted: {user.stats.sections.math.activities_attempted}
        </p>
        <p>Average Grade: {user.stats.sections.math.average_grade}</p>
        <h4>Geography</h4>
        <p>
          Assessments Attempted: {user.stats.sections.geography.activities_attempted}
        </p>
        <p>Average Grade: {user.stats.sections.geography.average_grade}</p>
        <h4>English</h4>
        <p>Assessments Attempted: </p>
        <p>Average Grade: </p>
        <ReturnToMenu />
      </div>
    </MainCard>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Profile);
