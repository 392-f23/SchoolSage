import { BrowserRouter, Routes, Route,  Navigate} from "react-router-dom";
import { useAuthState } from "../utilities/firebaseUtils";
import LoginPage from "../components/LoginPage/LoginPage";
import NeedTutorPage from "../components/NeedTutorPage/NeedTutorPage";
import TutorPage from "../components/TutorPage/TutorPage";
import PostTutorPage from "../components/PostTutorPage/PostTutorPage";

const RouteDispatcher = () => {
  const [user] = useAuthState();

  return (
    <BrowserRouter>
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
        <Route path="/need-tutor-page" element={<NeedTutorPage />} />
        <Route path="/tutor-page" element={<TutorPage/>} />

        <Route path="/post-tutor-page" element={<PostTutorPage />} />
      

       
        <Route path="/user-profile" element={<PostPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RouteDispatcher;
