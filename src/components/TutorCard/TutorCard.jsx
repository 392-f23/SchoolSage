import "./TutorCard.less";

import { firebaseSignOut } from "../../utilities/firebaseUtils";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ChatIcon from "@mui/icons-material/Chat";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const categoryColorMapping = {
  Science: "#2ecc71", // Green
  Reading: "#3498db", // Soft blue
  Math: "#e74c3c", // Red
  Art: "#9b59b6", // Purple
  Writing: "#e67e22", // Orange
};

const TutorCard = ({ itemInfo, onNeedHelpClick }) => {
  
  const item = itemInfo[1];
  const navigate = useNavigate();

  const handleNeedHelpClick = () => {
    // Assuming itemInfo contains the tutor information
    // Perform any logic related to "I need help" button click
    onNeedHelpClick(itemInfo[1]);
  };

  const navigateToChat = (receiver) => {
    navigate(`/chat`, { state: { receiver: receiver } });
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Card style={{ margin: "10px" }} className="user-card">
      <CardContent>
        <Typography variant="h5" component="div">
          {item.name}
          <div
            style={{
              display: "inline-block",
              backgroundColor: categoryColorMapping[item.category],
              color: "white",
              padding: "5px 10px",
              borderRadius: "20px",
              marginLeft: "10px",
              fontSize: "0.8rem",
            }}
          >
            {item.category}
          </div>
        </Typography>
        <Typography color="text.secondary">{item.level}</Typography>
        <Typography variant="body2">{item.location}</Typography>
        <Typography variant="body2">{item.time}</Typography>
        <Typography variant="body2">{item.description}</Typography>

        <Button
        onClick={handleNeedHelpClick}
          style={{ minWidth: "initial", marginRight: "10px" }}
          variant="contained"
          endIcon={<PersonAddIcon />}
        >
          I need help
        </Button>
        <Button
          variant="contained"
          onClick={() => navigateToChat(item.name)}
          endIcon={<ChatIcon />}
        >
          Contact
        </Button>
      </CardContent>
    </Card>
  );
};

export default TutorCard;
