import React from "react";
import styled from "styled-components";
import contact from "../assets/contact.jpg";
import { Link } from "react-router-dom";
import { colors } from "../data";

const MainDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 80vh;
  background-color: white;
  margin: 7vh 0;
  @media only screen and (min-width: 0px) and (max-width: 900px) {
    margin: 1vh 0;
    height: fit-content;
    grid-template-columns: 1fr;
  }
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 72%;
    border-radius: 0.6rem;
  }
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  h2 {
    width: 65%;
    font-size: 2.6rem;
    span {
      color: #005bc1;
    }
  }
  a {
    background-color: ${colors.mainColor};
    color: white;
    border: none;
    width: fit-content;
    padding: 1rem 1.4rem;
    border-radius: 0.3rem;
    font-size: 1.05rem;
    letter-spacing: 0.07rem;
    text-decoration: none;
    text-transform: capitalize;
    @media only screen and (min-width: 0px) and (max-width: 900px) {
      padding: 0.7rem 1rem;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 900px) {
    padding: 1rem;
    h2 {
      width: 100%;
      font-size: 2rem;
    }
  }
`;

const HomeContact = () => {
  return (
    <MainDiv>
      <ImgBox>
        <img src={contact} alt="" />
      </ImgBox>
      <TextBox>
        <h2>
          Want to unravel <span>another success</span> story within your
          <span> organization?</span>
        </h2>
        <Link to={"/contact"}>contact us</Link>
      </TextBox>
    </MainDiv>
  );
};

export default HomeContact;
