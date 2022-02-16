import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../hooks/useOnScreen";
import gsap from "gsap";
import SplitText from "../utils/SplitText";
import cn from "classnames";

import styled from "styled-components";
import SectionHeader from "./SectionHeader";

const Footer = () => {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineChildren",
      });
      const splitParent = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineParent",
      });
      gsap.fromTo(
        split.lines,
        { y: 200 },
        {
          duration: 1,
          y: 0,
          // opacity: 1,
          stagger: 0.1,
          ease: "power2",
        }
      );
    }
  }, [reveal]);

  return (
    <FooterStyle>
      <section className="footer" data-scroll-section>
        <SectionHeader title="Made in" />

        <h1
          className={cn("location", { "is-reveal": reveal })}
          id="location-text"
          ref={ref}
        >
          Rio de Janeiro
        </h1>
      </section>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.div`
  .footer {
    text-align: center;
    padding-bottom: 200px;
    .location {
      font-size: 18vw;
      text-transform: uppercase;
      font-family: "Bodoni Moda", serif;

      opacity: 0;
      &.is-reveal {
        opacity: 1;
      }
    }
  }
`;
