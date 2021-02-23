import * as React from "react";
import { ColorContext } from "../reusables/ColorContext";
import Tab from "../tabs/Tab";
import Tabs from "../tabs/Tabs";

const Profile: React.FC = () => {
  const color = React.useContext(ColorContext);
  const [showFirst, setShowFirst] = React.useState(true);
  const [showSecond, setShowSecond] = React.useState(false);

  const style = {
    color: color,
    ":hover": {
      color: "white",
    },
  };

  return (
    <div id="profile">

      {showFirst && (
        <div className="content-container">
          <div className="layout-container text">
            <p style={{ color: color }}>Who am I?</p>

            <p>My name is Yanwei Zhu.</p>
            <p>
              I'm a self-motivated web developer who love thinking outside the box, who create visual and functionality with code and other medium.
            </p>
          </div>
          <div className="layout-container buttons">
            <button
              className="button continue-button"
              onClick={() => {
                setShowFirst(false);
                setShowSecond(true);
              }}
              style={style}
            >
              {">>"}
            </button>
          </div>
        </div>
      )}

{showSecond && (
        <div className="content-container">
          <div className="layout-container text">
            <p style={{ color: color }}>How did I get here?</p>
            <p>
              By experimenting and constant learning, I transformed myself from a social science researcher to a web developer.
            </p>
            <div>
              <span>My journey</span>
              <Tabs>
                <Tab title="heart">
                  <span>2017-2019 | Lund University | Master of Science in Social Studies of Gender</span>
               <span>I published my master's thesis focuing on the gender and ethnic diversity of Swedish IT sector</span>
                </Tab>
                <Tab title="heart">second</Tab>
                <Tab title="heart">third</Tab>
              </Tabs>
            </div>
            
           
          </div>
          <div className="layout-container buttons">
            <button
              className="button continue-button"
              onClick={() => {
                setShowFirst(false);
                setShowSecond(true);
              }}
              style={style}
            >
              {">>"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
