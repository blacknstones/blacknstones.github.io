import React from 'react';
import { ColorContext } from '../../context/ColorContext';
import Tab from '../tabs/Tab';
import Tabs from '../tabs/Tabs';
import Heart from "../../assets/heart1.png";
import FullHeart from '../../assets/heart2.png';
import { ColorBox } from '../color/ColoredComponents';
import { Link } from 'react-router-dom';

const Journey: React.FC = () => {
    const {color} = React.useContext(ColorContext);
    const ColorStyle = {
      color: color,
    };

    return (
        <div id="journey">
        <p style={ColorStyle}>My journey</p>

        <Tabs showDefault={false} transform="clicked">
          <Tab title="" icon={Heart} newIcon={FullHeart}>
            <ColorBox color={color} className="tab-content">
              <p className="title">
                2017-2019 | Lund University | Master of Science in Social
                Studies of Gender
              </p>
              <p className="detail">
                I published my{" "}
                <a
                  className="inline-link content-link"
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
              <p className="detail">Established my fundamental understanding of programming and how to solve problem algorithmically. </p>
            </ColorBox>
          </Tab>
          <Tab title="" icon={Heart} newIcon={FullHeart}>
            <ColorBox color={color} className="tab-content">
            <p className="title">
                2020 | KTH Royal Institute of Technology | <a
                  className="inline-link" 
                  target="_blank"
                  href="https://www.kth.se/en/itm/sda/software-development-academy-1.841849"
                >
                  Software Development Academy
                </a>
              </p>
              <p className="detail">I gained in-depth knowledge of Java, JavaScript and industrial standard coding practice. </p>
            </ColorBox>
          </Tab>
          <Tab title="" icon={Heart} newIcon={FullHeart}>
            <ColorBox color={color} className="tab-content">
            <p className="title">
                2021 | School of Applied Technology &lt;/Salt&gt;
              </p>
              <p className="detail">I work as a full-stack JavaScript developer after three months of intensive training.</p>
            </ColorBox>
          </Tab>
          <Tab title="" icon={Heart} newIcon={FullHeart}>
            <ColorBox color={color} className="tab-content">
            <p className="title">
                Current
              </p>
              <p className="detail">I'm learning new technologies everyday and building interesting projects.</p>
              <p>Check out my projects <Link to="/projects" className="inline-link content-link">here</Link></p>
            </ColorBox>
          </Tab>
        </Tabs>
      </div>
    );
}

export default Journey;