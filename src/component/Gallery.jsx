import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import cn from "classnames";
import useOnScreen from "../hooks/useOnScreen";

const images = [
  {
    src: "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
    title: "Calliope",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
    title: "Golden Pothos",
    subtitle: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
];

function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <div className={"gallery-item"}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          <p className="gallery-info-category">{category}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div></div>
    </div>
  );
}

export default function Gallery({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      console.log(ref.current.offsetWidth);
      console.log(ref.current.clientWidth);
      console.log({ current: ref.current });
      let sections = gsap.utils.toArray(".gallery-item-wrapper");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <GalleryStyle>
      <section data-scroll-section className="section-wrapper gallery-wrap">
        <div className="gallery" ref={ref}>
          <div className="gallery-counter">
            <span>{activeImage}</span>
            <span className="divider" />
            <span>{images.length}</span>
          </div>
          {images.map((image, index) => (
            <GalleryItem
              key={src}
              index={index}
              {...image}
              updateActiveImage={handleUpdateActiveImage}
            />
          ))}
        </div>
      </section>
    </GalleryStyle>
  );
}

const GalleryStyle = styled.div`
  .gallery-wrap {
    background-color: #d53f41;
    margin-left: -5vw;
    margin-right: -5vw;
  }

  .gallery-counter {
    position: absolute;
    top: 10%;
    left: 100px;
    z-index: 1;
    mix-blend-mode: difference;
    line-height: 16px;
    color: #dbd8d6;

    font-family: "Bai Jamjuree";
    font-weight: 600;

    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    display: inline-block;

    .divider {
      content: "";
      background-color: white;
      width: 6.25vw;
      margin: 7px 10px;
      height: 1px;
      display: inline-block;
    }
  }

  .gallery {
    height: 80vh;

    padding: 10vh 0;
    width: 400%;
    display: flex;
    flex-wrap: nowrap;

    .gallery-item {
      width: 100%;
      height: 100%;
      position: relative;
      will-change: transform;
    }

    .gallery-item-info {
      position: absolute;
      bottom: 10%;
      z-index: 1;
      transform: translateX(-20%);
      color: #dbd8d6;
      color: white;

      .gallery-info-title {
        line-height: 6vw;
        font-family: "Bai Jamjuree";
        font-weight: 600;

        font-size: 6vw;
        -webkit-font-smoothing: antialiased;
      }

      .gallery-info-subtitle {
        position: relative;
        line-height: 6vw;
        color: transparent;
        font-family: "Bodoni Moda";
        font-weight: 400;
        font-size: 6vw;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke: 2px #dbd8d6;
      }

      .gallery-info-category {
        position: relative;
        line-height: 24px;
        font-family: "Bai Jamjuree";
        font-weight: 400;
        font-size: 24px;
        -webkit-font-smoothing: antialiased;
        margin-top: 2vh;
      }
    }

    .gallery-item-wrapper {
      aspect-ratio: 16/9;
      height: 100%;
      display: grid;
      grid-template-columns: 20vw 1fr 200px;
      width: 100vw;

      &.is-reveal {
        .gallery-item-image {
          transform: scale(1);
          filter: none;
        }
      }
    }

    .gallery-item-image {
      background-size: cover;
      background-position: center;
      transform-origin: center;
      width: 100%;
      height: 100%;
      will-change: transform;
      transform: scale(0.7);
      transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
      filter: grayscale(100%) sepia(20%) brightness(80%);
    }
  }
`;
