import React, { useEffect } from "react";
import "./UserProfile.less";
import SchoolSageHeader from "../SchoolSageHeader/SchoolSageHeader";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { firebaseSignOut } from "../../utilities/firebaseUtils";
import { useTutorContext } from '../Context/TutorContext';
import testData from "./UserData.json";
import TutorCard from "../TutorCard/TutorCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ChatIcon from "@mui/icons-material/Chat";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { categoryColorMapping } from "../NeedTutorPage/NeedTutorPage";
// import postings from "../NeedTutorPage/postings.json";

const createNeedTutorCard = (users) => {
    return Object.values(users).map((user, index) => (
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

            {/* <Button
              style={{ minWidth: "initial", marginRight: "10px" }}
              variant="contained"
              endIcon={<PersonAddIcon />}
              onClick={() => handleTutor(user.name)}
            >
              Tutor this person
            </Button> */}
            <Button
              variant="contained"
              endIcon={<ChatIcon />}
              onClick={() => navigateToChat(user.name)}
            >
              Contact{" "}
            </Button>
          </CardContent>
        </Card>
      ))
}

const createTutorCard = (users) => {
    return Object.values(users).map((user, index) => (
        <Card style={{ margin: "10px" }} className="user-card">
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

        {/* <Button
        onClick={handleNeedHelpClick}
          style={{ minWidth: "initial", marginRight: "10px" }}
          variant="contained"
          endIcon={<PersonAddIcon />}
        >
          I need help
        </Button> */}
        <Button
          variant="contained"
          onClick={() => navigateToChat(user.name)}
          endIcon={<ChatIcon />}
        >
          Contact
        </Button>
      </CardContent>
    </Card>
      ))
}
const UserProfile = ({ setIsUserLoggedIn, user }) => {
    const { selectedTutors } = useTutorContext();
    console.log("Selected Tutors in UserProfile:", selectedTutors);
    const { selectedNeedTutors } = useTutorContext();
    console.log("Selected NeedTutors in UserProfile:", selectedNeedTutors);

  const navigate = useNavigate();

  useEffect(() => {
    // console.log("UserProfile component rerendered with selectedTutors:", selectedTutors);

    if (user !== undefined && user !== null) {
      setIsUserLoggedIn(true);
    }
  }, [user]);

  const data = testData[0];

  const name = data.name;
  const location = data.location;
  const level = data.level;

  const handleUserSignOut = () => {
    firebaseSignOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
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
            <Button
              onClick={handleUserSignOut}
              variant="outlined"
              color="error"
              endIcon={<LogoutIcon />}
              className="logout-button"
            >
              Logout
            </Button>
          </div>
          <div className="selected-tutors-section">
          {Array.isArray(selectedTutors) &&
    createTutorCard(selectedTutors)}
        </div>
        <div className="selected-need-tutors-section">
          {Array.isArray(selectedNeedTutors) &&
    createNeedTutorCard(selectedNeedTutors)}
        </div>
        </div>
      </div>
      {/* <div className="selected-tutors-section">
          <h3>Selected Tutors:</h3>
          {Array.isArray(selectedTutors) &&
    selectedTutors.map((tutor, index) => (
      <TutorCard key={index} itemInfo={[index, tutor]} />
    ))}
        </div> */}
    </div>
  );
};

export default UserProfile;
