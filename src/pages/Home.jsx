import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

import web from "../assets/web.jpg";
import digital from "../assets/digital.jpg";
import app from "../assets/app.jpg";
import custom from "../assets/custom.jpg";
import cloud from "../assets/cloud.jpg";
import ui from "../assets/ui.jpg";

import ServicesCard from "../components/ServicesCard";
import { colors } from "../data";
import CountUp from "react-countup";

const MainBox = styled.div`
  height: fit-content;
`;

const ServicesOuterBox = styled.div`
  background-color: #eeeeee1d;

  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  @media only screen and (min-width: 0px) and (max-width: 900px) {
    height: fit-content;
    width: 100%;
    padding: 1rem 0;
  }
`;
const ServiceTextBox = styled.div`
  width: 80%;
  margin: 0 auto;

  p {
    color: #00000099;
    font-size: 1rem;
    letter-spacing: 0.09rem;
    font-weight: 600;
  }
  h2 {
    margin: 0;
    margin-bottom: 4rem;
    font-size: 2.5rem;
    display: flex;
    letter-spacing: 0.1rem;
    color: #000000cf;
    flex-direction: column;
    span {
      span {
        color: ${colors.mainColor};
      }
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 900px) {
    width: 90%;
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const ServicesBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  width: 80%;
  margin: 0 auto;
  @media only screen and (min-width: 0px) and (max-width: 900px) {
    display: flex;
    /* background-color: red; */
    width: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;
const HistoryBox = styled.div`
  background-color: #086ad8;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    width: 80%;
    margin: 0 auto;
    justify-content: center;
    padding: 1rem 0;

    align-items: center;
    height: fit-content;
    div {
      display: flex;
      flex-direction: column;
      text-align: center;
      span {
        color: white;
        font-size: 3.3rem;
        font-weight: bold;
      }
      p {
        color: #b5d3f3;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.2rem;
        letter-spacing: 0.09rem;
      }
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 900px) {
    height: fit-content;
    div {
      flex-direction: column;
    }
  }
`;

const Home = () => {
  const servicesData = [
    {
      heading: "Website development",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odio quidem beatae placeat.",
      img: web,
      path: "/services/website-development",
      ani: "fade-right",
    },
    {
      heading: "App development",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odio quidem beatae placeat.",
      img: app,
      path: "/services/website-development",
      ani: "fade-down",
    },
    {
      heading: "Digital Marketing",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odio quidem beatae placeat.",
      img: digital,
      path: "/services/website-development",
      ani: "fade-left",
    },
    {
      heading: "Custom Software Development",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odio quidem beatae placeat.",
      img: custom,
      path: "/services/website-development",
      ani: "fade-right",
    },
    {
      heading: "Cloud Migration Services",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odio quidem beatae placeat.",
      img: cloud,
      path: "/services/website-development",
      ani: "fade-down",
    },
    {
      heading: "UI/UX Designing",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odio quidem beatae placeat.",
      img: ui,
      path: "/services/website-development",
      ani: "fade-left",
    },
  ];

  return (
    <MainBox>
      <Header />

      <ServicesOuterBox>
        <ServiceTextBox>
          <p data-aos="fade-left">INDUSTRIES WE SERVE</p>
          <h2 data-aos="fade-right">
            <span>For your very specific industry,</span>
            <span>
              we have <span>highly-tailored IT solutions.</span>
            </span>
          </h2>
        </ServiceTextBox>
        <ServicesBox>
          {servicesData.map((ser) => {
            return <ServicesCard key={ser.heading} data={ser} />;
          })}
        </ServicesBox>
      </ServicesOuterBox>
      <HistoryBox>
        <div data-aos="fade-in">
          <div>
            <CountUp end={120} enableScrollSpy={true} duration={2} />
            <p>Happy clients</p>
          </div>
          <div>
            <CountUp end={32} enableScrollSpy={true} duration={2} />
            <p>FINISHED PROJECTS</p>
          </div>
          <div>
            <CountUp end={20} enableScrollSpy={true} duration={2} />
            <p>SKILLED EXPERTS</p>
          </div>
          <div>
            <CountUp end={80} enableScrollSpy={true} duration={2} />
            <p>MEDIA POSTS</p>
          </div>
        </div>
      </HistoryBox>

      <div>1</div>
    </MainBox>
  );
};

export default Home;
