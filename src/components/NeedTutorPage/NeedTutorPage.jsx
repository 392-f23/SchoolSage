import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import postings from "./postings.json";
import ChatIcon from "@mui/icons-material/Chat";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Fab from "@mui/material/Fab";
import "./NeedTutorPage.less";
import SchoolSageHeader from "../SchoolSageHeader/SchoolSageHeader.jsx";

const categoryColorMapping = {
  Science: "#2ecc71", // Green
  Reading: "#3498db", // Soft blue
  Math: "#e74c3c", // Red
  Art: "#9b59b6", // Purple
  Writing: "#e67e22", // Orange
};
const NeedTutorPage = () => {
  const navigate = useNavigate();

  const handleAddPosting = () => {
    console.log("post");
  };

  const navigateToChat = (receiver) => {
    navigate(`/chat`, { state: { receiver: receiver } });
  };

  const navigateToPostNeedTutor = () => {
    navigate("/post-need-tutor-page")
  };

  return (
    <div className="need-tutor-page">
      <SchoolSageHeader />
      <div className="posting-box">
        {Object.values(postings).map((user, index) => (
          <Card style={{ margin: "10px" }} key={index} className="user-card">
            <CardContent>
              <Typography variant="h5" component="div">
                {user.name}
                <div
                  style={{
                    display: "inline-block",
                    backgroundColor: categoryColorMapping[user.category],
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    marginLeft: "10px",
                    fontSize: "0.8rem",
                  }}
                >
                  {user.category}
                </div>
              </Typography>
              <Typography color="text.secondary">{user.level}</Typography>
              <Typography variant="body2">{user.location}</Typography>
              <Typography variant="body2">{user.time}</Typography>
              <Typography variant="body2">{user.description}</Typography>

              <Button
                style={{ minWidth: "initial", marginRight: "10px" }}
                variant="contained"
                endIcon={<PersonAddIcon />}
              >
                Add to Dashboard
              </Button>
              <Button
                variant="contained"
                endIcon={<ChatIcon />}
                onClick={() => navigateToChat(user.name)}
              >
                Contact{" "}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Fab
        style={{
          backgroundColor: "#00008b",
          color: "white",
          margin: "0 auto",
          marginTop: "10px",
          marginBottom: "15px",
        }}
        onClick={handleAddPosting}
        color="primary"
        aria-label="add"
      >
        <AddIcon onClick={navigateToPostNeedTutor} />
      </Fab>
    </div>
  );
};

export default NeedTutorPage;
