import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import cn from "classnames";

import gsap from "gsap";
import SplitText from "../utils/SplitText";
import useOnScreen from "../hooks/useOnScreen";

const About = () => {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
        // onComplete: () => split.revert(),
      });
    }
  }, [reveal]);

  return (
    <AboutStyle>
      <section
        className={cn("about-section", { "is-reveal": reveal })}
        data-scroll-section
      >
        <SectionHeader title="about" />
        <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
          Flirty Flowers is a blog about flowers and the floral designers who
          make them into art. Creativity and the art of ‘making’ require
          dialogue. The full purpose of the Flirty Flowers blog is to encourage
          and inspire. We value art, we value insight, and we value opinion.
        </p>
      </section>
    </AboutStyle>
  );
};

export default About;

const AboutStyle = styled.div`
  .about-section {
    p {
      font-size: 70px;
      line-height: 1.12;
      opacity: 0;

      > div {
        opacity: 0;
        transform: translateY(0px);
      }
      &.is-reveal {
        opacity: 1;
      }
    }
  }
`;
