import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../components/LoginPage/LoginPage";

const RouteDispatcher = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteDispatcher;
