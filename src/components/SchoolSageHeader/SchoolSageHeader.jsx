import "./SchoolSageHeader.less"

const SchoolSageHeader = () => {
    return (
        <div className="header">
        <div className="header-icon-container">
          <img
            className="header-icon"
            src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgstudying%20(2).png"
          />
        </div>
        <div className="header-title-container">
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
            <span className="header-slogan-text">Knowledge at Your Fingertips!</span>
          </div>
        </div>
        <div className="header-navigation-container">
          
        </div>
        <div className="header-user-interaction-container"></div>
      </div>
    );
}

export default SchoolSageHeader