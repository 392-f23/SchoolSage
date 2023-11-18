import { useState, useEffect } from "react";
import { signInWithGoogle, useAuthState } from "../../utilities/firebaseUtils";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./LoginPage.less";

const pageContents = [
  {
    slogan: "Empowering Learners, Shaping Futures, Inspiring Greatness!",
    imageUrl:
      "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgremote-team%20(1).svg",
  },
  {
    slogan: "Unlocking Potential, Inspiring Innovation, Achieving Dreams!",
    imageUrl:
      "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imghigh-five.svg",
  },
  {
    slogan: "Fostering Curiosity, Encouraging Success, Leading Change!",
    imageUrl:
      "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgsuccess-goal.svg",
  },
];

const LoginPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [fade, setFade] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [user] = useAuthState();
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  }

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentPage((prevPage) => (prevPage + 1) % pageContents.length);
        setFade(false);
      }, 500);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/need-tutor-page");
    }
  }, [user, navigate]);

  return (
    <div className="login-page">
      <div className="login-container">
        <section className="login-section">
          <div className="login-icon-container">
            <img
              className="login-icon"
              src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgicon.svg"
              alt="NU"
            />
          </div>
          <div className="login-title-container">
            <span className="login-title-text">S</span>
            <span className="login-title-text">C</span>
            <span className="login-title-text">H</span>
            <span className="login-title-text">O</span>
            <span className="login-title-text">O</span>
            <span className="login-title-text">L</span>
            <span className="login-title-text active">S</span>
            <span className="login-title-text active">A</span>
            <span className="login-title-text active">G</span>
            <span className="login-title-text active">E</span>
          </div>
          <div className="login-content-container">
            <FormControl className="login-email-input-container">
              <OutlinedInput
                className="login-email-input"
                type={"text"}
                placeholder={"Enter Email"}
                sx={{
                  "& fieldset": { border: "none" },
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <AccountCircleIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl className="login-password-input-container">
              <OutlinedInput
                className="login-password-input"
                type={showPassword ? "text" : "password"}
                placeholder={"Enter Password"}
                sx={{
                  "& fieldset": { border: "none" },
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <div className="login-forget-password-container">
              <Button variant="text" className="login-forget-password-button">
                Recover Password
              </Button>
            </div>
            <Button variant="contained" className="login-sign-in-button">
              Sign In
            </Button>
            <span className="login-continue-with-text">Or continue with</span>
            <div className="login-other-sign-in-container">
              <Button
                variant="contained"
                className="login-google-sign-in-button"
                onClick={signInWithGoogle}
              >
                <img
                  src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgGoogle.svg"
                  className="login-google-icon"
                />
              </Button>
            </div>
          </div>
        </section>
        <section className="slogan-section">
          <div className="fuzzy-glass-section">
            <p className={`fuzzy-glass-slogan ${fade ? "hidden-content" : ""}`}>
              {pageContents[currentPage].slogan}
            </p>
            <img
              className={fade ? "hidden-content" : ""}
              src={pageContents[currentPage].imageUrl}
            />
            <div className="fuzzy-glass-three-dots">
              {pageContents.map((_, index) => (
                <span
                  key={index}
                  className={`fuzzy-glass-dot ${
                    index === currentPage ? "active" : ""
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
