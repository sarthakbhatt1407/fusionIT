import React from "react";
import headerImg from "../assets/header.webp";
import styled, { keyframes } from "styled-components";
import { colors } from "../data";

const MainBox = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
  padding: 0 10rem;
  @media only screen and (min-width: 0px) and (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 7rem 1rem;
  }
`;

const LeftBox = styled.div`
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  gap: 0.5rem;
  span {
    color: #0000004c;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.08rem;
    text-transform: uppercase;
  }
  h1 {
    display: flex;
    flex-direction: column;
    margin: 0;
    span {
      font-size: 2.4rem;
      color: ${colors.mainColor};
      font-weight: bold;
      text-transform: none;
      &:last-child {
        font-size: 7.5rem;
        letter-spacing: 0.3rem;
      }
    }
  }
  p {
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 0.08rem;
    color: black;
  }
  button {
    background-color: ${colors.mainColor};
    color: white;
    border: none;
    width: fit-content;
    padding: 1rem 1.4rem;
    border-radius: 0.3rem;
    font-size: 1.05rem;
    letter-spacing: 0.07rem;
  }
  @media only screen and (min-width: 0px) and (max-width: 1000px) {
    /* padding-left: 7rem; */
    justify-content: center;

    span {
      font-size: 0.7rem;
    }
    p {
      font-size: 0.95rem;
    }
    h1 {
      span {
        font-size: 1.6rem;
        &:last-child {
          font-size: 5.5rem;
          letter-spacing: 0.1rem;
        }
      }
    }
  }
`;
const Ani = keyframes`
    0%{
        transform: translateY(-15px);
    }
    50%{
        transform: translateY(15px);
    }
    75%{
        transform: translateY(15px);
    }
    100%{
        transform: translateY(-15px);
    }
`;
const RightBox = styled.div`
  img {
    width: 100%;
    animation: ${Ani} 2s;
    animation-iteration-count: infinite;
  }
  @media only screen and (min-width: 0px) and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70%;
    }
  }
`;

const Header = () => {
  return (
    <MainBox>
      <LeftBox>
        <span data-aos="fade-right">find your solution</span>
        <h1>
          <span data-aos="fade-left">Best choice for your</span>
          <span data-aos="fade-right">Startup</span>
        </h1>
        <p data-aos="fade-left">
          The full set of services around development and maintenance of complex
          business-critical applications.
        </p>
        <button data-aos="fade-left">Learn more</button>
      </LeftBox>
      <RightBox>
        <img src={headerImg} alt="" />
      </RightBox>
    </MainBox>
  );
};

export default Header;
