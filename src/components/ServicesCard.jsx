import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../data";

const MainBox = styled.div`
  box-shadow: 0.2rem 0.2rem 1rem #e7e7e7;
  border-radius: 0.6rem;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30rem;
  transition: all 0.3s;
  backface-visibility: hidden;
  width: 25rem;

  a {
    text-align: center;
    padding: 0.5rem 0;
    font-weight: bold;
    border-top: 2px solid #bdbcbc28;
    background-color: transparent;
    margin-top: -5rem;
    color: ${colors.mainColor};
    overflow: hidden;
    padding: 0.7rem 2rem;
    position: relative;
    text-decoration: none;
    transition: 0.2s transform ease-in-out;
    will-change: transform;
    z-index: 0;
    letter-spacing: 0.1rem;
    font-size: 1.25rem;
    &::after {
      background-color: ${colors.mainColor};

      content: "";
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      transform: translate(-100%, 0) rotate(10deg);
      transform-origin: top left;
      transition: 0.2s transform ease-out;
      will-change: transform;
      z-index: -1;
    }
    &:hover::after {
      transform: translate(0, 0);
    }
    &:hover {
      border: 2px solid transparent;
      color: white;
      transform: scale(1.05);
      font-weight: 500;
      will-change: transform;
    }
    @media only screen and (min-width: 0px) and (max-width: 549px) {
      margin: 0;
    }
  }
  &:hover {
    transform: scale(1.03);
    border-top: 2px solid ${colors.mainColor};
  }
  @media only screen and (min-width: 0px) and (max-width: 1000px) {
    height: 53vh;
    width: 90%;
    a {
      font-size: 1rem;
    }
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  height: 70%;
  img {
    width: 15rem;
    height: 10rem;
  }
  h2 {
    color: #000000b5;
    font-size: 1.5rem;
  }
  p {
    text-align: center;
    font-size: 1rem;
    color: #00000063;
    letter-spacing: 0.09rem;
  }
  @media only screen and (min-width: 0px) and (max-width: 1000px) {
    h2 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const ServicesCard = (props) => {
  const { img, heading, para, path, ani } = props.data;
  return (
    <MainBox data-aos={ani}>
      <ContentDiv>
        <img src={img} alt="" />
        <h2>{heading}</h2>
        <p>{para}</p>
      </ContentDiv>

      <Link to={path}>Discover now</Link>
    </MainBox>
  );
};

export default ServicesCard;
