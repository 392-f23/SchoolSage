import "./NeedTutorPage.less";
import { firebaseSignOut } from "../../utilities/firebaseUtils";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import postings from "./postings.json";
import ChatIcon from '@mui/icons-material/Chat';
import LogoutIcon from '@mui/icons-material/Logout';

const NeedTutorPage = () => {
  const navigate = useNavigate();
  
  const handleUserSignOut = () => {
    firebaseSignOut();
    navigate("/login");
  };
  const handleAddPosting = () => {
    console.log("post")
  };
  return (
    <div className="need-tutor-page">
      <div className="header">
        <Button style={{ backgroundColor: '#ceb8ef', color: "black", width:"25vw", margin:"5px"}} onClick={handleUserSignOut} endIcon={<LogoutIcon />}>Signout</Button>
        <div className="title">Tutor Requests</div>
      </div>
      <div className="posting-box">
      {Object.values(postings).map((user, index) => (
          <Card style={{margin:"10px", }} key={index} className="user-card">
            <CardContent>
              <Typography variant="h5" component="div">
                {user.name}
              </Typography>
              <Typography color="text.secondary">
                {user.level}
              </Typography>
              <Typography variant="body2">
                {user.location}
              </Typography>
              <Typography variant="body2">
                {user.Time}
              </Typography>
              <Typography variant="body2">
                {user.Description}
              </Typography>
              <Button variant="contained" endIcon={<ChatIcon />}>Contact </Button>
            </CardContent>
          </Card>
        ))}
        </div>
      <Button style={{ backgroundColor: '#ceb8ef', color: "black", width:"25vw", margin:"0 auto", marginTop: "10px"}} onClick={handleAddPosting} variant="contained" endIcon={<AddIcon />}>Post Request</Button>
    </div>
  );
};

export default NeedTutorPage;
