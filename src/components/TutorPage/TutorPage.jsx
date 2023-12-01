import "./Tutorpage.less";
import TutorCard from "../TutorCard/TutorCard";
import { useNavigate } from "react-router-dom";
import SchoolSageHeader from "../SchoolSageHeader/SchoolSageHeader";
import { useDbData } from "../../utilities/firebaseUtils";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Fab from "@mui/material/Fab";
import React, { useState, useEffect} from "react";
import { useTutorContext } from '../Context/TutorContext';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ChatIcon from "@mui/icons-material/Chat";
import { categoryColorMapping } from "../NeedTutorPage/NeedTutorPage";
import postings from "./postings.json";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";


const TutorPage = () => {
  const navigate = useNavigate();

  const navigateToPostTutor = () => {
    navigate("/post-tutor-page");
  };

  const { addTutor, selectedTutors } = useTutorContext();
  const [currentPostings, setCurrentPostings] = useState(Object.values(postings));

  // const handleNeedHelpClick = (selectedTutor) => {
  //   // Add the selected tutor to the list
  //   console.log("Selected Tutor:", selectedTutor);
  //   // console.log("Selected Tutors:", selectedTutors);

  //   setSelectedTutors((prevSelectedTutors) => [...prevSelectedTutors, selectedTutor]);
  // };

  const handleTutor = (userName) => {
    const selectedNeedTutor = currentPostings.find((user) => user.name === userName);
    if (selectedNeedTutor) {
      addTutor(selectedNeedTutor);
      console.log("selected tutors from need tutor page: ", selectedTutors)
    }
    const updatedPostings = currentPostings.filter((user) => user.name !== userName);
    setCurrentPostings(updatedPostings);
    setBookingDeleted(true)
  };
  
  const [isBookingDeleted, setBookingDeleted] = useState(false);
  useEffect(() => {
    if (isBookingDeleted) {
      setTimeout(() => {
        setBookingDeleted(false);
      }, 3000);
    }
  }, [isBookingDeleted]);

  // const [data, error] = useDbData("/Tutor-Page");
  // if (error)
  //   return (
  //     <div className="tutor-page">
  //       <SchoolSageHeader />

  //       <h1>Error loading course data: {`${error}`}</h1>
  //     </div>
  //   );
  // if (data === undefined)
  //   return (
  //     <div className="tutor-page">
  //       <SchoolSageHeader />

  //       <h1>Loading data...</h1>
  //     </div>
  //   );
  // if (!data) return <h1>No course data found</h1>;

  return (
    <div className="tutor-page">
      <SchoolSageHeader />
      {isBookingDeleted && <Alert style={{backgroundColor:"#f1f9f8", padding: "10px", justifyContent: "center" }}severity="info">
          <AlertTitle>Success</AlertTitle>
          {`Added to your dashboard`}
        </Alert>}

      <div className="posting-box">
        {Object.values(currentPostings).map((user, index) => (
        <Card key= {user.id} style={{ margin: "10px" }} className="user-card">
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
        onClick={() => handleTutor(user.name)}
          style={{ minWidth: "initial", marginRight: "10px" }}
          variant="contained"
          endIcon={<PersonAddIcon />}
        >
          I need help
        </Button>
        <Button
          variant="contained"
          onClick={() => navigateToChat(user.name)}
          endIcon={<ChatIcon />}
        >
          Contact
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
        color="primary"
        aria-label="add"
      >
        <AddIcon onClick={navigateToPostTutor} />
      </Fab>
    </div>
  );
};

export default TutorPage;
