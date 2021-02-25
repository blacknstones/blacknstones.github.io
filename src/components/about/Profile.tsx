import * as React from "react";
import Intro from "../profile/Intro";
import Background from "../profile/Background";
import Tabs from "../tabs/Tabs";
import Tab from "../tabs/Tab";
import Journey from "../profile/Journey";
import Robot from "../../assets/robot.png";

const Profile: React.FC = () => {

  return (
    <div className="content-container profile">
      <Tabs showDefault={true} transform="active" useColorTab={true}>
        <Tab title="" icon={Robot} newTitle="Who am I?">
          <div className="layout-container text">
             <p>My name is Yanwei Zhu.</p>
          <p>
            I'm a self-motivated web developer who love thinking outside the
            box, and creating visual &amp; functionality with code and other
            medium.
          </p>
          </div>
        </Tab>

        <Tab title="2" newTitle="How did I get here?">
          <div className="layout-container text">
             <p>
              By experimenting, self-motivating and constant learning, I
              transformed myself from a social science researcher to a web
              developer.
            </p>
            <Journey />
          </div>
        </Tab>

        <Tab title="3" newTitle="What's next?">
          <div className="layout-container text">
             <p>Interesting projects</p>
             <p>Collaboration with motivated developers</p>
          </div>
        </Tab>

      </Tabs>

    </div>
  );
};

export default Profile;
