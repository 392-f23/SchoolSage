// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Button, CardActionArea, CardActions } from "@mui/material";
// import Divider from "@mui/material/Divider";
import "./TutorCard.less";

import { firebaseSignOut } from "../../utilities/firebaseUtils";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import postings from "./postings.json";
import ChatIcon from '@mui/icons-material/Chat';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Fab from '@mui/material/Fab';

const categoryColorMapping = {
  "Science": "#2ecc71",    // Green
  "Reading": "#3498db", // Soft blue
  "Math": "#e74c3c", // Red
  "Art": "#9b59b6", // Purple
  "Writing": "#e67e22"      // Orange
}; 

const TutorCard = (props) => {
//   const { itemId, item } = props;
  const navigate = useNavigate();

  const fakeitem = {
    "uid": "123456",
    "name": "Chenyu Wang",
    "location": "Downtown Evanston",
    "level": "undergrade",
    "category": ["Science", "Reading"],
    "time": "Monday to Friday afternoon",
    "description": "I can teach high school computer science and Reading."
  }

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return <Card style={{margin:"10px", }} key={fakeitem.uid} className="user-card">
  <CardContent>
    <Typography variant="h5" component="div">
                      {fakeitem.name}
                      {fakeitem.category.map((cate, id) => {
                        return <div style={{
                          display: 'inline-block',
                          backgroundColor: categoryColorMapping[cate],
                          color: 'white',
                          padding: '5px 10px',
                          borderRadius: '20px',
                          marginLeft: '10px',
                          fontSize: '0.8rem'
                      }}> 
                          {cate}
                      </div>
                      })}
                  </Typography>
    <Typography color="text.secondary">
      {fakeitem.level}
    </Typography>
    <Typography variant="body2">
      {fakeitem.location}
    </Typography>
    <Typography variant="body2">
      {fakeitem.time}
    </Typography>
    <Typography variant="body2">
      {fakeitem.description}
    </Typography>
    
    <Button style={{  minWidth: 'initial', marginRight: "10px"}} variant="contained" endIcon={<PersonAddIcon />}>Add to Dashboard</Button>
    <Button  variant="contained" endIcon={<ChatIcon />}>Contact</Button>
  
  </CardContent>
</Card>

//   return <Card style={{ margin: "10px" }} key={fakeitem.uid} className="user-card">
//   <CardContent>
//     <Typography variant="h5" component="div">
//       {fakeitem.name}
//     </Typography>
//     <Typography color="text.secondary">{fakeitem.level}</Typography>
//             {fakeitem.proficiency.map((prof, id) => {
//                return <Button
//               key={id}
//                size="small"
//                 className="tutor-card-proficiency-button"
//                disableRipple={true}
//                 >
//                      {prof}
//                 </Button>
//                  })
//             }
//     <Typography variant="body2">{fakeitem.location}</Typography>
//     <Typography variant="body2">{fakeitem.time}</Typography>
//     <Typography variant="body2">{fakeitem.description}</Typography>
//     <Button variant="contained" endIcon={<ChatIcon />}>
//       Contact{" "}
//     </Button>
//   </CardContent>
// </Card>

  // return (
  //   <Card className="tutor-card">
  //     <CardActionArea>
  //       <CardContent className="tutor-card-content">
  //         <Typography
  //           variant="h5"
  //           component="div"
  //           className="tutor-card-name"
  //         >
  //           {capitalizeFirstLetter(fakeitem.name)}
  //         </Typography>
  //         <Typography
  //           variant="h6"
  //           component="div"
  //           className="tutor-card-location"
  //         >
  //           {fakeitem.location}
  //         </Typography>
  //         <Typography
  //           variant="body1"
  //           component="div"
  //           className="tutor-card-location"
  //         >
  //           {fakeitem.avaliable}
  //         </Typography>
  //       </CardContent>
  //     </CardActionArea>
  //     <CardActionArea>
  //     <div className="tutor-card-proficiency">
  //           {fakeitem.proficiency.map((prof, id) => {
  //               return <Button
  //               key={id}
  //               size="small"
  //               className="tutor-card-proficiency-button"
  //               disableRipple={true}
  //               >
  //                   {prof}
  //               </Button>
  //               })
  //           }
  //       </div>
  //     </CardActionArea>
  //     <Divider light />
  //     <CardContent className="tutor-card-content">
  //         <Typography
  //           variant="body2"
  //           color="text.secondary"
  //           className="tutor-card-description"
  //         >
  //           {fakeitem.description}
  //         </Typography>
  //       </CardContent>
  //   </Card>
  // );
};

export default TutorCard;
