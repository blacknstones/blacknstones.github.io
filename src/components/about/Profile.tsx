import * as React from "react";
import Tabs from "../tabs/Tabs";
import Tab from "../tabs/Tab";
import Journey from "./Journey";
import SocialLinks from "./SocialLinks";
import Card from "../game/Card";

import RobotIcon from "../../assets/robot.png";
import PigIcon from "../../assets/pig.png";
import SunflowerIcon from "../../assets/sunflower.png";
import StarIcon from "../../assets/star.png";
import MonsteraIcon from "../../assets/monstera.png";
import CoffeeIcon from "../../assets/coffee.png";
import ColorSwitcher from "../color/ColorSwitcher";

const next = [
    {
      title: "Learning",
      desc: "Keep on learning new technologies and develop professionally",
    },
    {
      title: "Creating",
      desc: "Build interesting projects on frontend & backend",
    },
    {
      title: "Collaborating",
      desc: "Work with and be inspired by other motivated developers",
    },
    {
        title: "Value",
        desc:"Solve inequality issues with technology",
    }
  ];

const Profile: React.FC = () => {

  return (
    <div className="profile">
      <Tabs showDefault={true} transform="active" useColorTab={true}>
        <Tab title="" icon={RobotIcon} newTitle="Who am I?">
          <div className="layout-container text">
            <p>My name is Yanwei Zhu.</p>
            <p>
              I'm a full-stack developer who loves thinking outside the box, who creates with code and other media.
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

        <Tab title="" icon={MonsteraIcon} newTitle="What's next?">
          <div className="layout-container text">
          <ul className="cards">
              {next.map((item) => (
                <Card item={item} />
              ))}
            </ul>
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
