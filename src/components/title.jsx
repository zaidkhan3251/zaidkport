import React, { memo } from "react";
import Typewriter from "typewriter-effect";
import myPic from "../images/homeImg.png";
import "../styles/title.scss";

const Title = memo(() => {
  return (
    <section className="title_container">
      <div className="title_contents">
        <div className="title_text">
          <h1>Hi,     I'm </h1>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Zaid Khan",
                  "a web developer",
                  "a mobile app developer"
                ],
                autoStart: true,
                loop: true,
                delay: 40
              }}
            />
          </h1>
        </div>

        <div className="title_image">
          <img src={myPic} alt="mypicture" />
        </div>
      </div>
    </section>
  );
});

export default Title;
