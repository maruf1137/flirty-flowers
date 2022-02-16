import React from "react";
import styled from "styled-components";
import photos from "../data";

const Featured = () => {
  const [firstImage, secondImage] = photos;
  return (
    <FeaturedStyle>
      <section className="featured-section" data-scroll-section>
        <div className="featured-row-layout">
          <h6>green</h6>
          <img src={firstImage} data-scroll />
        </div>
        <div className="featured-column-layout">
          <h6>lily</h6>
          <img src={secondImage} data-scroll />
        </div>
      </section>
    </FeaturedStyle>
  );
};

export default Featured;

const FeaturedStyle = styled.div`
  .featured-section {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;

    h6 {
      font-size: 22px;
      text-transform: uppercase;
      font-weight: 500;
    }

    img {
      clip-path: inset(100% 0% 0% 0%);
      transition: clip-path 1s cubic-bezier(0.77, 0, 0.175, 1);

      &.is-reveal {
        clip-path: inset(0% 0% 0% 0%);
      }
    }
    .featured-row-layout,
    .featured-column-layout {
      display: grid;
      gap: 1rem;
    }

    .featured-row-layout {
      grid-template-rows: repeat(2, auto);

      img {
        width: 100%;
        // height: 100%;
        object-fit: cover;
      }
    }

    .featured-column-layout {
      grid-template-columns: 100px auto;
      align-items: flex-end;
      img {
        width: 100%;
        height: 125vh;
        object-fit: cover;
      }
      h6 {
        transform: translateX(100%) rotate(-90deg);
        transform-origin: left bottom;
        justify-self: self-end;
      }
    }
  }
`;
