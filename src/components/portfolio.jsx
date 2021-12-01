import React, { memo } from "react";
import "../styles/portfolio.scss";

import ProjectCrousel from "./projectcrousel";
const Portfolio = memo(({ refs }) => {
  return (
    <section ref={refs} className="portfolio-section">
      <div className="section-title">PORTFOLIO</div>
      <ProjectCrousel />
    </section>
  );
});

export default Portfolio;
