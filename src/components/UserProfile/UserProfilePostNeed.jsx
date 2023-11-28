import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { firebaseSignOut } from "../../utilities/firebaseUtils";
import testData from "./UserProfilePostNeedTest.json";
import "./UserProfilePostNeed.less";

// Sample requests data
const requestsData = testData;

const UserProfileRequests = ({ setIsUserLoggedIn, user }) => {
  const navigate = useNavigate();

  const handleUserSignOut = () => {
    firebaseSignOut();
    navigate("/login");
  };

  return (
    <div className="background-container">
      <div className="profile-container">
        <div className="user-info">
          {/* Display user details */}
          <h2>My Requests</h2>
          {/* Display list of requests */}
          <div className="request-list">
            {requestsData.map((request) => (
              <div key={request.id} className="request-item">
                <p>Name: {request.name}</p>
                <p>Level: {request.level}</p>
                <p>Location: {request.location}</p>
                <p>Time: {request.time}</p>
                <p>Description: {request.description}</p>
              </div>
            ))}
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

export default UserProfileRequests;
