import Carousel from "react-elastic-carousel";
import paint from "../images/paint.png";
import pickup from "../images/pickups.png";

import "../styles/crousel.scss";

export default function ProjectCrousel() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  return (
    <div className="main">
      <Carousel breakPoints={breakPoints}>
        <div className="project-container">
          <div className="project-image">
            <img src={paint} alt="image" />
          </div>
          <div className="project-content">
            <div className="project-title">
              <h1>Title</h1>
            </div>
            <div className="project-description">
              <h2>Tech Use</h2>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </p>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-image">
            <img src={pickup} alt="image" />
          </div>
          <div className="project-content">
            <div className="project-title">
              <h1>Title</h1>
            </div>
            <div className="project-description">
              <h2>Tech Use</h2>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </p>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-image">
            <img src={paint} alt="image" />
          </div>
          <div className="project-content">
            <div className="project-title">
              <h1>Title</h1>
            </div>
            <div className="project-description">
              <h2>Tech Use</h2>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </p>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-image">
            <img src={pickup} alt="image" />
          </div>
          <div className="project-content">
            <div className="project-title">
              <h1>Title</h1>
            </div>
            <div className="project-description">
              <h2>Tech Use</h2>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
