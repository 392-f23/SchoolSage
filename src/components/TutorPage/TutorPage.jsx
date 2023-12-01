import './Tutorpage.less'
import TutorCard from "../TutorCard/TutorCard";
import { useState, useEffect } from "react";
import SchoolSageHeader from "../SchoolSageHeader/SchoolSageHeader";
import { useDbData } from "../../utilities/firebaseUtils"
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

const navigateToPostTutor = () => {
  navigate("/post-tutor-page")
};

const TutorPage = () => {
    const [data, error] = useDbData('/Tutor-Page');
    if (error) return <div className="tutor-page">
    <SchoolSageHeader />

    <h1>Error loading course data: {`${error}`}</h1>
    </div>;
    if (data === undefined) return <div className="tutor-page">
    <SchoolSageHeader />

    <h1>Loading data...</h1>
    </div>;
    // if (!data) return <h1>No course data found</h1>;

    return <div className="tutor-page">
      <SchoolSageHeader />

      <div className="posting-box">
      {Object.entries(data).map(( itemInfo, id ) => {
        return <TutorCard key={itemInfo[0]} itemInfo={itemInfo} />}
        
      )}
      </div>

      <Fab
        style={{
          backgroundColor: "#00008b",
          color: "white",
          margin: "0 auto",
          marginTop: "10px",
          marginBottom: "15px",
        }}
        onClick={navigateToPostTutor}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>

  </div>
}

export default TutorPage;