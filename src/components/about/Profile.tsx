import * as React from "react";
import Intro from "../profile/Intro";
import Background from "../profile/Background";
import Tabs from "../tabs/Tabs";
import Tab from "../tabs/Tab";
import Journey from "../profile/Journey";

const Profile: React.FC = () => {
  // const [showFirst, setShowFirst] = React.useState(false);
  // const [showSecond, setShowSecond] = React.useState(true);

  return (
    <div className="content-container" id="profile">
      <Tabs showDefault={true}>
        <Tab title="Who am I?">
          <div className="layout-container text">
             <p>My name is Yanwei Zhu.</p>
          <p>
            I'm a self-motivated web developer who love thinking outside the
            box, and creating visual &amp; functionality with code and other
            medium.
          </p>
          </div>
         
        </Tab>
        <Tab title="How did I get here?">
          <div className="layout-container text">
             <p>
              By experimenting, self-motivating and constant learning, I
              transformed myself from a social science researcher to a web
              developer.
            </p>
            <Journey />
          </div>
       
        </Tab>
      </Tabs>

      {/* {showFirst && (
        <Intro setShowFirst={setShowFirst} setShowSecond={setShowSecond} />
      )}

      {showSecond && (
        <Background setShowFirst={setShowFirst} setShowSecond={setShowSecond} />
      )} */}
    </div>
  );
};

export default Profile;
