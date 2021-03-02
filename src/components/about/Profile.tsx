import * as React from "react";
import Tabs from "../tabs/Tabs";
import Tab from "../tabs/Tab";
import Journey from "../profile/Journey";
import SocialLinks from "./SocialLinks";
import Card from "../game/Card";

import RobotIcon from "../../assets/robot.png";
import PigIcon from "../../assets/pig.png";
import SunflowerIcon from "../../assets/sunflower.png";
import StarIcon from "../../assets/star.png";
import CoffeeIcon from "../../assets/coffee.png";

const next = [
    {
      title: "Learning",
      desc: "Keep on learning new technologies and developing professionally",
    },
    {
      title: "Creating",
      desc: "Build interesting user interface and games",
    },
    {
      title: "Collaboration",
      desc: "Work with and be inspired by other motivated developers",
    },
    {
        title: "Value",
        desc:"Solve inequality issues",
    }
  ];

const Profile: React.FC = () => {
  return (
    <section className="content-container profile">
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
    </section>
  );
};

export default Profile;
