// Import React
import React from "react";

// Import Libraries

// Import Components
import Title from "../../smallParts/Title/Title";
import Header from "../../smallParts/Header/Header";
import MainCard from "../../smallParts/MainCard/MainCard";
import ReturnToMenu from "../../smallParts/ReturnToMenu/ReturnToMenu";
import Chart from "../../smallParts/Chart/Chart";

// Import Styles
import "./Profile.scss";

// Profile Component
const Profile = () => {
  const fdata = [
    { title: "Math", value: 10, color: "#E38627" },
    { title: "Geography", value: 15, color: "#C13C37" },
    { title: "English", value: 20, color: "#6A2135" },
  ];

  const data = {
    labels: ["Math", "Geography", "Engish"],
    datasets: [
      {
        label: "Time Spent",
        data: [12, 15, 20],
        backgroundColor: [
          "#8AC0DE" /* Blue */,
          "#F3DDB3" /* Yellow */,
          "#FEADB9" /* Pink */,
        ]
      },
    ],
  };

  return (
    <MainCard>
      <div className="profile">
        <Title />
        <Header sectionName="profile" />
        <Chart data={data} />
        <ReturnToMenu />
      </div>
    </MainCard>
  );
};

export default Profile;
