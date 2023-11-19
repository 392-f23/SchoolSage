import React, { useEffect } from "react";
import "./UserProfilePostTutor.less";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { firebaseSignOut } from "../../utilities/firebaseUtils";
import { useDbData } from "../../utilities/firebaseUtils";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

// Import the test user data
import testData from "./UserProfilePostTutorTest.json"; 

const UserProfile = ({ setIsUserLoggedIn, user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== undefined && user !== null) {
      setIsUserLoggedIn(true);
    }
  }, [user]);

  const data = testData[0]; 

  // Handle user data
  const name = data?.name || "N/A";
  const contact = data?.contact || "N/A";
  const favoriteSubject = data?.favoriteSubject || "N/A";
  const experience = data?.experience || "N/A";
  const rating = data?.rating || "N/A";
  const introduction = data?.introduction || "N/A";

  const handleUserSignOut = () => {
    firebaseSignOut();
    navigate("/login");
  };

  return (
    <div className="background-container">
      <div className="profile-container">
        <div className="user-info">
          {/* Display user details */}
          <h2>{name}</h2>
          <div className="top-text">
            <p>Contact: {contact}</p>
            <p>Favorite Subject: {favoriteSubject}</p>
            <p>Experience: {experience}</p>
            <p>Rating: {rating}</p>
            <p>Introduction: {introduction}</p>
          </div>
          <Button
            onClick={handleUserSignOut}
            variant="outlined"
            color="error"
            endIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
