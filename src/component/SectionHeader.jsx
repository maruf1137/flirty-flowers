import React from "react";
import styled from "styled-components";

const SectionHeader = ({ title }) => {
  return (
    <SectionHeaderStyle>
      <h6 className="section-header">{title}</h6>
    </SectionHeaderStyle>
  );
};

export default SectionHeader;

const SectionHeaderStyle = styled.div`
  .section-header {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: "Syncopate", sans-serif;
    color: #626262;
    font-size: 2.2rem;
  }
`;
