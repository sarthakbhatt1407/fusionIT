import React from "react";
import styled from "styled-components";
import team from "../assets/team.jpg";
import Team from "../components/Team";

const MainBox = styled.div``;

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  font-size: 2rem;
  padding-top: 2rem;
  background-color: #005bc1;
  color: white;
  gap: 0.7rem;
  h1 {
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 1rem;
  }
  span {
    font-size: 0.7rem;
    color: #ffffffbc;
  }
  @media only screen and (min-width: 0px) and (max-width: 900px) {
    h1 {
      font-size: 2.3rem;
    }
    height: 35vh;
  }
`;
const BreadCumbBox = styled.div`
  background-color: #f6f6f6;
  padding: 1rem;
  span {
    width: 90%;
    display: flex;
    margin: 0 auto;
    letter-spacing: 0.09rem;
  }
`;

const SectionBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  gap: 2rem;
  width: 90%;
  margin: 0 auto;
  @media only screen and (min-width: 0px) and (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1rem;
  }
`;

const H2Heading = styled.h2`
  color: #005bc1;
  font-weight: bold;
  border-bottom: 2px solid black;
  padding-bottom: 0.5rem;
  font-size: 2rem;
  width: fit-content;
  @media only screen and (min-width: 0px) and (max-width: 900px) {
    font-size: 1.6rem;
  }
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
  }
  p {
    font-size: 1.1rem;
    color: #2b2a2a;
    letter-spacing: 0.09rem;
    text-align: justify;
  }
  @media only screen and (min-width: 0px) and (max-width: 900px) {
    p {
      font-size: 1rem;
    }
  }
`;

const RightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
    border-radius: 0.6rem;
  }
`;

const AboutUs = () => {
  return (
    <MainBox>
      <HeaderBox>
        <h1>About Us</h1>
      </HeaderBox>
      <BreadCumbBox>
        <span>Home / About Us</span>
      </BreadCumbBox>

      <SectionBox>
        <LeftBox data-aos="fade-right">
          <H2Heading data-aos="fade-up">
            Probo Entertainment Pvt. Ltd.{" "}
          </H2Heading>
          <p>
            Probo Entertainment Pvt Ltd is the process or result of a unique
            collaboration of two or more things to form a single entity. Our
            company is the embodiment of two great minds coming together to
            create something that is not only greater than the sum of its parts,
            but also more efficient, effective, and powerful. We are dedicated
            to providing our clients with top-quality service and support that
            is unrivaled in the industry.
          </p>
          <p>
            Our team of professionals is dedicated to working with
            state-of-the-art strategies in order to providing the best possible
            service to our clients. We are constantly updating and improving our
            methods in order to stay ahead of the curve, and we are always
            looking for new ways to improve our services. Our goal is to provide
            our clients with the best possible experience, and we are always
            available to answer any questions or concerns that they may have. We
            pride ourselves on being a top-notch team, and we are always working
            to improve our skills so that we can provide the best possible
            service to our clients.
          </p>
          <p>
            Our team is comprised of experienced professionals who are
            passionate about their work and committed to providing the best
            possible experience for our clients. We believe that fusion is the
            key to success, and we are dedicated to becoming the industry
            leaders in innovation and creativity.
          </p>
        </LeftBox>
        <RightDiv data-aos="fade-left">
          <img src={team} alt="" />
        </RightDiv>
      </SectionBox>
      <H2Heading
        data-aos="fade-up"
        style={{ display: "block", margin: "0 auto" }}
      >
        Our Team
      </H2Heading>
      <Team />
    </MainBox>
  );
};

export default AboutUs;
