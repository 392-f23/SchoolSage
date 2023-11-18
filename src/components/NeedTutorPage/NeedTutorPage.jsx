import "./NeedTutorPage.less";
import { firebaseSignOut } from "../../utilities/firebaseUtils";
import { useNavigate } from "react-router-dom";

const NeedTutorPage = () => {
  const navigate = useNavigate();
  
  const handleUserSignOut = () => {
    firebaseSignOut();
    navigate("/login");
  };

  return (
    <div className="need-tutor-page">
      <button onClick={handleUserSignOut}>Test Signout</button>
    </div>
  );
};

export default NeedTutorPage;
