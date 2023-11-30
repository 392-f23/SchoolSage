import './Tutorpage.less'
import TutorCard from "../TutorCard/TutorCard";
import { useState, useEffect } from "react";
import SchoolSageHeader from "../SchoolSageHeader/SchoolSageHeader";




const TutorPage = () => {


    return <div className="tutor-page">
      <SchoolSageHeader />

      <div className="posting-box">
      {[1,2,3,4,5,6,7,8].map(({ item }) => (
        <TutorCard />
      ))}
      </div>

    {/* <div className="tutor-card-list">
      {[1,2,3,4,5,6,7,8].map(({ item }) => (
        <TutorCard />
      ))}
    </div> */}
  </div>
}

export default TutorPage;