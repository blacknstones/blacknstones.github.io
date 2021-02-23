import * as React from "react";
import { ColorContext } from "../reusables/ColorContext";
import Tab from "../tabs/Tab";
import Tabs from "../tabs/Tabs";
import Heart from "../../assets/heart1.png";
import { ColorBox } from "../reusables/ColoredComponents";

const Profile: React.FC = () => {
  const color = React.useContext(ColorContext);
  const [showFirst, setShowFirst] = React.useState(true);
  const [showSecond, setShowSecond] = React.useState(false);

  const ColorStyle = {
    color: color,
  };

  return (
    <div id="profile">
      {showFirst && (
        <div className="content-container">
          <div className="layout-container text">
            <p style={ColorStyle}>Who am I?</p>

            <p>My name is Yanwei Zhu.</p>
            <p>
              I'm a self-motivated web developer who love thinking outside the
              box, who create visual and functionality with code and other
              medium.
            </p>
          </div>
          <div className="layout-container buttons">
            <button
              className="button continue-button"
              onClick={() => {
                setShowFirst(false);
                setShowSecond(true);
              }}
              style={ColorStyle}
            >
              {">>"}
            </button>
          </div>
        </div>
      )}

      {showSecond && (
        <div className="content-container">
          <div className="layout-container text">
            <p style={ColorStyle}>How did I get here?</p>
            <p>
              By experimenting, self-motivating and constant learning, I
              transformed myself from a social science researcher to a web
              developer.
            </p>

            <div>
              <p style={ColorStyle}>My journey</p>

              <Tabs>
                <Tab title={Heart}>
                  <ColorBox color={color} className="tab-content">
                    <p className="title">
                      2017-2019 | Lund University | Master of Science in Social
                      Studies of Gender
                    </p>
                    <p className="detail">
                      I published my{" "}
                      <a
                        className="inline-link"
                        target="_blank"
                        href="https://lup.lub.lu.se/student-papers/search/publication/8993439"
                      >
                        master's thesis
                      </a>{" "}
                      focuing on the gender and ethnic diversity in the Swedish
                      IT sector.
                    </p>
                  </ColorBox>
                </Tab>
                <Tab title={Heart}>
                  <ColorBox color={color} className="tab-content">
                    <p className="title">
                      2019 | Harvard University &amp; EdX |{" "}
                      <a
                        className="inline-link"
                        target="_blank"
                        href="https://www.edx.org/course/cs50s-introduction-to-computer-science?hs-referral=course-listing"
                      >
                        CS50's Introduction of Computer Science
                      </a>
                    </p>
                    <p className="detail"></p>
                  </ColorBox>
                </Tab>
                <Tab title={Heart}>
                  <ColorBox color={color} className="tab-content">
                    Third
                  </ColorBox>
                </Tab>
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
              style={ColorStyle}
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
