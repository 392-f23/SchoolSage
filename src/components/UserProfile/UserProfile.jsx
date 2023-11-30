import React, { useEffect } from "react";
import "./UserProfile.less";
import SchoolSageHeader from "../SchoolSageHeader/SchoolSageHeader";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

// Import the test user data
import testData from "./UserData.json";

const UserProfile = ({ setIsUserLoggedIn, user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== undefined && user !== null) {
      setIsUserLoggedIn(true);
    }
  }, [user]);

  const data = testData[0];

  // Handle user data
  const name = data.name;
  const location = data.location;
  const level = data.level;
  // const category = data.category;
  // const time = data.time;
  // const description = data.description;

  const handleUserSignOut = () => {
    // You can add your sign-out logic here
    navigate("/login");
  };

  const handlePostTutor = () => {
    navigate("/post-tutor-page");
  };

  const handlePostNeed = () => {
    navigate("/post-need-tutor-page");
  };

  return (
    <div>
      <SchoolSageHeader />
      <div className="background-container">
        <div className="profile-container">
          <div className="user-info">
            <h2 className="tutor-name">{name}</h2>
            <div className="top-text">
              <p className="tutor-location">{location}</p>
              <p className="tutor-level">{level}</p>
              {/* Uncomment the lines below if you want to display other user details */}
              {/* <p className="tutor-category">category: {category}</p>
              <p className="tutor-time">time: {time}</p>
              <p className="tutor-description">description: {description}</p> */}
            </div>
            <div className="button-container">
              <Button
                onClick={handlePostTutor}
                variant="outlined"
                color="primary"
                className="action-button"
              >
                To register as a tutor
              </Button>
              <Button
                onClick={handlePostNeed}
                variant="outlined"
                color="primary"
                className="action-button"
              >
                To make a tutor request
              </Button>
            </div>
            {/* <Button
              onClick={handleUserSignOut}
              variant="outlined"
              color="error"
              endIcon={<LogoutIcon />}
              className="logout-button"
            >
              Logout
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
