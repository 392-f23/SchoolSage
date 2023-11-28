import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import LoginPage from "../components/LoginPage/LoginPage";
import NeedTutorPage from "../components/NeedTutorPage/NeedTutorPage";
import UserProfilePostTutor from "../components/UserProfile/UserProfilePostTutor";
import UserProfilePostNeed from "../components/UserProfile/UserProfilePostNeed";
import TutorPage from "../components/TutorPage/TutorPage";
import PostTutorPage from "../components/PostTutorPage/PostTutorPage";

const RouteDispatcher = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/need-tutor-page" element={<NeedTutorPage />} />
        <Route path="/tutor-page" element={<TutorPage/>} />
        <Route path="/post-tutor-page" element={<PostTutorPage />} />
        <Route path="/user-profileTutor" element={<UserProfilePostTutor />} />
        <Route path="/user-profileNeed" element={<UserProfilePostNeed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteDispatcher;
