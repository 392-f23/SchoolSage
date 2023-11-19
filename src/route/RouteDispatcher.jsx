import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import LoginPage from "../components/LoginPage/LoginPage";
import NeedTutorPage from "../components/NeedTutorPage/NeedTutorPage";
import PostPage from "../components/PostPage/PostPage";

const RouteDispatcher = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/" element={<PostPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/need-tutor-page" element={<NeedTutorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteDispatcher;
