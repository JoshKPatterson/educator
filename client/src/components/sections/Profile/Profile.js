// Import React
import React from "react";

// Import Libraries
import { PieChart } from 'react-minimal-pie-chart';

// Import Components
import Title from "../../smallParts/Title/Title";
import Header from "../../smallParts/Header/Header";
import MainCard from "../../smallParts/MainCard/MainCard";
import ReturnToMenu from "../../smallParts/ReturnToMenu/ReturnToMenu";

// Import Styles
import "./Profile.scss";

// Profile Component
const Profile = () => {
  const data = [
    { title: 'Math', value: 10, color: '#E38627' },
    { title: 'Geography', value: 15, color: '#C13C37' },
    { title: 'English', value: 20, color: '#6A2135' }
  ]

  
  return (
    <MainCard>
      <div className="profile">
        <Title />
        <Header sectionName="profile" />
        <PieChart data={data}/>
        <ReturnToMenu />
      </div>
    </MainCard>
  );
};

export default Profile;
