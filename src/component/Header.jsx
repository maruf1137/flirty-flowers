import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "../utils/SplitText";
import styled from "styled-components";

const Header = () => {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <HeaderStyle>
      <section className="header-container" data-scroll-section>
        <ul className="header-menu">
          <li>intro</li>
          <li>about</li>
          <li>featured</li>
        </ul>
        <h1 id="header-text">Art Objects</h1>
      </section>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.div`
  .header-container {
    position: relative;

    .header-menu {
      position: absolute;
      left: 0;
      top: 100px;

      letter-spacing: 1px;
      font-family: "Syncopate", sans-serif;
      color: #626262;
      font-weight: 600;
      text-transform: uppercase;

      li {
        margin: 10px 0;
      }
    }

    h1 {
      font-size: 20vw;
      text-transform: uppercase;
      text-align: center;
      font-family: "Bai Jamjuree", sans-serif;
      font-weight: 600;
      line-height: 1;
      transform: translateY(-15rem);
    }
  }
  .lineParent {
    overflow: hidden;
    .lineChildren {
      transform: translate(0, 500px);
    }
  }
`;
