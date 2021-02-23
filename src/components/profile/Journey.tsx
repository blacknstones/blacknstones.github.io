import React from 'react';
import { ColorContext } from '../reusables/ColorContext';
import Tab from '../tabs/Tab';
import Tabs from '../tabs/Tabs';
import Heart from "../../assets/heart1.png";
import FullHeart from '../../assets/heart5.png';
import { ColorBox } from '../reusables/ColoredComponents';

const Journey: React.FC = () => {
    const color = React.useContext(ColorContext);
    const ColorStyle = {
      color: color,
    };

    return (
        <div id="journey">
        <p style={ColorStyle}>My journey</p>

        <Tabs showDefault={false}>
          <Tab title="" icon={Heart} newIcon={FullHeart}>
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
          <Tab title="" icon={Heart} newIcon={FullHeart}>
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
          <Tab title="" icon={Heart} newIcon={FullHeart}>
            <ColorBox color={color} className="tab-content">
              Third
            </ColorBox>
          </Tab>
        </Tabs>
      </div>
    );
}

export default Journey;