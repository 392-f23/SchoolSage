import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Divider from "@mui/material/Divider";
import "./TutorCard.less";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TutorCard = (props) => {
//   const { itemId, item } = props;
  const navigate = useNavigate();

  const fakeitem = {
    "uid": "123456",
    "name": "Chenyu Wang",
    "location": "Downtown Evanston",
    "level": "undergrade",
    "proficiency": ["Roman History", "Computer Science"],
    "avaliable": "Monday to Friday afternoon",
    "description": "I can teach high school computer science and roman history."
  }

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Card className="tutor-card">
      <CardActionArea>
        <CardContent className="tutor-card-content">
          <Typography
            variant="h5"
            component="div"
            className="tutor-card-name"
          >
            {capitalizeFirstLetter(fakeitem.name)}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            className="tutor-card-location"
          >
            {fakeitem.location}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            className="tutor-card-location"
          >
            {fakeitem.avaliable}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
      <div className="tutor-card-proficiency">
            {fakeitem.proficiency.map((prof, id) => {
                return <Button
                key={id}
                size="small"
                className="tutor-card-proficiency-button"
                disableRipple={true}
                >
                    {prof}
                </Button>
                })
            }
        </div>
      </CardActionArea>
      <Divider light />
      <CardContent className="tutor-card-content">
          <Typography
            variant="body2"
            color="text.secondary"
            className="tutor-card-description"
          >
            {fakeitem.description}
          </Typography>
        </CardContent>
    </Card>
  );
};

export default TutorCard;
