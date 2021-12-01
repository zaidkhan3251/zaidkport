import React, { useCallback, useState, memo } from "react";
import "../styles/navbar.scss";
import logo from "../images/logo1.gif";

import { MdMenu } from "react-icons/md";

const Navbar = memo(({ handleScroll }) => {
  const [active, setActive] = useState(false);

  const click = useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar__logo">
            {" "}
            <img src={logo} alt="죄송합니다 이미지를 불러오지 못했습니다." />
          </div>

          <ul className="navbar__menu">
            <li>
              <button onClick={() => handleScroll("about")}>About me</button>
            </li>
            <li>
              <button onClick={() => handleScroll("skills")}>Skills</button>
            </li>
            <li>
              <button onClick={() => handleScroll("portfolio")}>
                Portfolio
              </button>
            </li>
          </ul>

          <div className="toggleBtn" onClick={click}>
            <MdMenu />
          </div>
        </nav>
      </header>
      {active && (
        <div className="toggle__menu">
          <ul>
            <li>
              <button
                onClick={() => {
                  handleScroll("about");
                  click();
                }}
              >
                About me
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScroll("skills");
                  click();
                }}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScroll("portfolio");
                  click();
                }}
              >
                Portfolio
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
});

export default Navbar;
