// Import React
import React from "react";

// Import Redux
import { connect } from "react-redux";
import { logout } from "../../../actions/authActions";

// Import Components
import Header from "../../smallParts/Header/Header";
import MainCard from "../../smallParts/MainCard/MainCard";

const Logout = ({ logout }) => {
  const content = () => {
    return (
      <div className="logout">
        <Header sectionName="Logout" />
        <button onClick={logout}>Logout</button>
      </div>
    );
  };
  return <MainCard content={content()} />;
};

export default connect(null, { logout })(Logout);
