import React, { memo } from "react";
import "../styles/about.scss";
import img from "../images/aboutpic.jpg";

import {
  IoPerson,
  IoLocationSharp,
  IoMailSharp,
  IoCalendarClearOutline
} from "react-icons/io5";

const About = memo(({ refs }) => {
  return (
    <section ref={refs} className="about-section">
      <div className="section-title">ABOUT ME</div>

      <div className="about-content">
        <img
          className="about-picture"
          src={img}
          alt="이미지 불러오기를 실패했습니다."
        ></img>
        <div className="about-info">
          <b className="info-title">"Detail is quality"</b>
          <div className="info">
            <br />
            Hello. Zaid khan, a developer with a passion for continuous growth
            is. Learn new features and develop various ideas with fun ideas.
            likes to I am a student in Computer Science and I am a front-end
            developer. I am longing. As the saying goes, 'detail is quality',
            check carefully Check once again to see if there are any missing
            parts and create a high-quality work I will become a developer who
            challenges without fear of modification and improvement.
          </div>
          <ul>
            <li>
              <div className="info-li">
                <IoPerson className="icon" /> 22 Y/o
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoLocationSharp className="icon" /> Karachi, PK
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoMailSharp className="icon" /> zaid89779@@gmail.com
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoCalendarClearOutline className="icon" /> 1999.08.14
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default About;
