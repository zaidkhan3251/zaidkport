import React, { memo } from "react";
import "../styles/footer.scss";
import { IoArrowUp } from "react-icons/io5";

import {
  Github,
  Facebook,
  Instagram,
  Twitter
} from "@icons-pack/react-simple-icons";
const Footer = memo(({ handleScroll }) => {
  return (
    <footer className="footer-section">
      <div className="footer-contents">
        <button onClick={() => handleScroll()} className="topButton">
          <IoArrowUp />
        </button>

        <div className="link">
          <a href="https://github.com/hubblin">
            <Github color="#6e5494" size={30} />
          </a>
          <a href="https://github.com/hubblin">
            <Facebook color="#1877F2" size={30} />
          </a>
          <a href="https://github.com/hubblin">
            <Instagram color="#E4405F" size={30} />
          </a>
          <a href="https://github.com/hubblin">
            <Twitter color="#1DA1F2" size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
