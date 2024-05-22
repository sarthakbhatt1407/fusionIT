import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

import web from "../assets/web.jpg";
import digital from "../assets/digital.jpg";
import app from "../assets/app.jpg";
import ServicesCard from "../components/ServicesCard";

const MainBox = styled.div`
  height: fit-content;
`;

const ServicesOuterBox = styled.div`
  background-color: #eeeeee1d;
  padding: 1rem 0;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 0px) and (max-width: 900px) {
    height: fit-content;
    width: 100%;
  }
`;

const ServicesBox = styled.div`
  display: flex;
  gap: 3rem;
  width: 80%;
  margin: 0 auto;
  @media only screen and (min-width: 0px) and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
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
  ];

  return (
    <MainBox>
      <Header />
      <ServicesOuterBox>
        <ServicesBox>
          {servicesData.map((ser) => {
            return <ServicesCard key={ser.heading} data={ser} />;
          })}
        </ServicesBox>
      </ServicesOuterBox>
    </MainBox>
  );
};

export default Home;
