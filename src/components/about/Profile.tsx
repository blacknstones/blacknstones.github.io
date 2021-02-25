import * as React from "react";

import Tabs from "../tabs/Tabs";
import Tab from "../tabs/Tab";
import Journey from "../profile/Journey";
import RobotIcon from "../../assets/robot.png";
import SocialLinks from "./SocialLinks";
import PigIcon from "../../assets/pig.png";
import SunflowerIcon from "../../assets/sunflower.png";
import StarIcon from "../../assets/star.png";
import CoffeeIcon from "../../assets/coffee.png";

const Profile: React.FC = () => {
  return (
    <div className="content-container profile">
      <Tabs showDefault={true} transform="active" useColorTab={true}>
        <Tab title="" icon={RobotIcon} newTitle="Who am I?">
          <div className="layout-container text">
            <p>My name is Yanwei Zhu.</p>
            <p>
              I'm a self-motivated web developer who love thinking outside the
              box, creating visual &amp; functionality with code and other media.
            </p>
          </div>
        </Tab>

        <Tab title="" icon={SunflowerIcon} newTitle="How did I get here?">
          <div className="layout-container text">
            <p>
              By experimenting, self-motivating and constant learning, I
              transformed myself from a social science researcher to a web
              developer.
            </p>
            <Journey />
          </div>
        </Tab>

        <Tab title="" icon={StarIcon} newTitle="What's next?">
          <div className="layout-container text">
            <p>Interesting projects</p>
            <p>Collaboration with motivated developers</p>
          </div>
        </Tab>

        <Tab title="" icon={CoffeeIcon} newTitle="Where to find me?">
            <SocialLinks/>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Profile;
