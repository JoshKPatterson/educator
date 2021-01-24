// Import React
import React from "react";

// Import Styles
import "./Profile.scss";

// Import Components
import Title from "../../smallParts/Title/Title";
import Header from "../../smallParts/Header/Header";
import MainCard from "../../smallParts/MainCard/MainCard";
import ReturnToMenu from "../../smallParts/ReturnToMenu/ReturnToMenu";

// Profile Component
const Profile = () => {
  return (
    <MainCard>
      <div className="profile">
        <Title />
        <Header sectionName="profile" />
        <ReturnToMenu />
      </div>
    </MainCard>
  );
};

export default Profile;
