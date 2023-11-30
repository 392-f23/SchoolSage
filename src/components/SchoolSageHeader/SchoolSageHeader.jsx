import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";
import "./SchoolSageHeader.less";

const SchoolSageHeader = () => {
  const [searchValue, setSearchValue] = useState("");
  const [openNavigation, setOpenNavigation] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isNeedTutorPage = location.pathname === "/need-tutor-page";
  const isTutorPage = location.pathname === "/tutor-page";
  const isChat = location.pathname === "/chat";
  const isUserProfile = location.pathname === "/user-profile";

  const navigateToNeedTutor = () => {
    if (!isNeedTutorPage) {
      navigate("/need-tutor-page");
    }
  };

  const navigateToTutor = () => {
    if (!isTutorPage) {
      navigate("/tutor-page");
    }
  };

  const navigateToChat = () => {
    if (!isChat) {
      navigate("/chat");
    }
  };

  const navigateToUserProfile = () => {
    if (!isUserProfile) {
      navigate("/user-profile");
    }
  };

  return (
    <>
      <div className="header">
        {/* icon */}
        <div className="header-icon-container">
          <img
            className="header-icon"
            src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgstudying%20(2).png"
          />
        </div>
        {/* title */}
        <div className="header-title-container" onClick={navigateToNeedTutor}>
          <div className="upper-section">
            <span className="header-title-text">S</span>
            <span className="header-title-text">c</span>
            <span className="header-title-text">h</span>
            <span className="header-title-text">o</span>
            <span className="header-title-text">o</span>
            <span className="header-title-text">l</span>
            <span className="header-title-text active">S</span>
            <span className="header-title-text active">a</span>
            <span className="header-title-text active">g</span>
            <span className="header-title-text active">e</span>
          </div>
          <div className="lower-section">
            <span className="header-slogan-text">
              Knowledge at Your Fingertips!
            </span>
          </div>
        </div>
        {/* search */}
        <div className="header-search-container">
          <SearchBar
            className="header-search"
            placeholder="Search Your Tutor 😎"
            value={searchValue}
            onChange={(searchValue) => setSearchValue(searchValue)}
            onRequestSearch={() => {}}
          />
        </div>
        {/* user interaction */}
        <div className="header-user-interaction-container">
          <div className="header-user-interaction-navigate">
            <Button
              variant="contained"
              className="navigate-button"
              onClick={() => setOpenNavigation(true)}
              startIcon={<HomeIcon />}
            >
              Navigate
            </Button>
          </div>
          <div className="header-user-interaction-chat">
            <Button
              variant="contained"
              className="chat-button"
              onClick={navigateToChat}
              startIcon={<ChatIcon />}
            >
              Message
            </Button>
          </div>
          <div className="header-user-interaction-profile">
            <Button
              variant="contained"
              className="profile-button"
              onClick={navigateToUserProfile}
              startIcon={<PersonIcon />}
            >
              Profile
            </Button>
          </div>
        </div>
      </div>

      {openNavigation && (
        <div className="navigation">
          <div className="navigation-container">
            <div
              className="navigation-need-tutor"
              onClick={navigateToNeedTutor}
            >
              <img
                src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img112312312313.png"
                className="navigation-need-tutor-icon"
              />
              <div className="navigation-need-tutor-text-container">
                <span className="navigation-need-tutor-text-i">I&nbsp;</span>
                <span className="navigation-need-tutor-text">Need Tutor</span>
              </div>
            </div>
            <div className="navigation-post-tutor" onClick={navigateToTutor}>
              <img
                src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgstudying.png"
                className="navigation-post-tutor-icon"
              />
              <div className="navigation-post-tutor-text-container">
                <span className="navigation-post-tutor-text-i">I&nbsp;</span>
                <span className="navigation-post-tutor-text">Post Tutor</span>
              </div>
            </div>
          </div>
          <button
            className="navigation-close-button"
            onClick={() => setOpenNavigation(false)}
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default SchoolSageHeader;
