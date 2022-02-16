import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarStyle>
      <div className="nav" data-scroll-section>
        <div>menu</div>
        <div>FLIRTY FLOWERS</div>
        <div>cart</div>
      </div>
    </NavbarStyle>
  );
};

export default Navbar;

const NavbarStyle = styled.div`
  .nav {
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
    font-size: 24px;
    letter-spacing: 1px;
    font-family: "Syncopate", sans-serif;
    color: #464646;
    font-weight: 600;
    text-transform: uppercase;

    div {
      transform: translateY(0.1rem);
    }
  }
`;
