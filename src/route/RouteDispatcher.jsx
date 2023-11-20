import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import LoginPage from "../components/LoginPage/LoginPage";
import NeedTutorPage from "../components/NeedTutorPage/NeedTutorPage";
import TutorPage from "../components/TutorPage/TutorPage";

const RouteDispatcher = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/need-tutor-page" element={<NeedTutorPage />} />
        <Route path="/tutor" element={<TutorPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteDispatcher;
