import React from "react";
import styled from "styled-components";
import ServicesCard from "../components/ServicesCard";
import { colors } from "../data";
import web from "../assets/web.jpg";
import digital from "../assets/digital.jpg";
import app from "../assets/app.jpg";
import custom from "../assets/custom.jpg";
import cloud from "../assets/cloud.jpg";
import ui from "../assets/ui.jpg";
import HomeContact from "../components/HomeContact";
import Faq from "../components/Faq";

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
    path: "/services/app-development",
    ani: "fade-down",
  },
  {
    heading: "Digital Marketing",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odio quidem beatae placeat.",
    img: digital,
    path: "/services/digital-marketing",
    ani: "fade-left",
  },
  {
    heading: "Custom Software Development",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odio quidem beatae placeat.",
    img: custom,
    path: "/services/custom-software-development",
    ani: "fade-right",
  },
  {
    heading: "Cloud Migration Services",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odio quidem beatae placeat.",
    img: cloud,
    path: "/services/cloud-migration-services",
    ani: "fade-down",
  },
  {
    heading: "UI/UX Designing",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odio quidem beatae placeat.",
    img: ui,
    path: "/services/ui-ux-designing",
    ani: "fade-left",
  },
];

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
    text-transform: uppercase;
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
const Services = () => {
  return (
    <MainBox>
      <HeaderBox>
        <h1>Services</h1>
        <span>Home / Services</span>
      </HeaderBox>
      <ServicesOuterBox>
        <ServiceTextBox>
          <p data-aos="fade-left">truly prominent IT solutions</p>
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
      <HomeContact />
      <Faq />
    </MainBox>
  );
};

export default Services;
