import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import postings from "./postings.json";
import ChatIcon from "@mui/icons-material/Chat";
import SchoolSageHeader from "../SchoolSageHeader/SchoolSageHeader";
import "./NeedTutorPage.less";

const NeedTutorPage = () => {
  const navigate = useNavigate();

  const handleAddPosting = () => {
    console.log("post");
  };

  const navigateToChat = (receiver) => {
    navigate(`/chat`, { state: { receiver: receiver } });
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
              </Typography>
              <Typography color="text.secondary">{user.level}</Typography>
              <Typography variant="body2">{user.location}</Typography>
              <Typography variant="body2">{user.Time}</Typography>
              <Typography variant="body2">{user.Description}</Typography>
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
    </div>
  );
};

export default NeedTutorPage;
