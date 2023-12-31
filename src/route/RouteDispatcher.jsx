import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "../utilities/firebaseUtils";
import LoginPage from "../components/LoginPage/LoginPage";
import SchoolSageChat from "../components/SchoolSageChat/SchoolSageChat";
import NeedTutorPage from "../components/NeedTutorPage/NeedTutorPage";
import TutorPage from "../components/TutorPage/TutorPage";
import PostTutorPage from "../components/PostTutorPage/PostTutorPage";
import ParentsPage from "../components/ParentsPage/ParentsPage";
import UserProfile from "../components/UserProfile/UserProfile";
import { TutorProvider } from '../components/Context/TutorContext';


const RouteDispatcher = () => {
  const [user] = useAuthState();

  return (
    <BrowserRouter>
          <TutorProvider>

      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Navigate replace to="/need-tutor-page" />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/need-tutor-page" element={<NeedTutorPage />} />
        <Route path="/tutor-page" element={<TutorPage />} />
        <Route path="/post-tutor-page" element={<PostTutorPage />} />
        <Route path="/post-need-tutor-page" element={<ParentsPage />} />
        <Route path="/chat" element={<SchoolSageChat />} />
      </Routes>

      </TutorProvider>

    </BrowserRouter>
  );
};

export default RouteDispatcher;
