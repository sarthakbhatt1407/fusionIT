import React, { useEffect } from "react";
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
import Clients from "../components/Clients";
import Faq from "../components/Faq";
import HomeContact from "../components/HomeContact";

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

const ClientsBox = styled.div`
  background-color: #fdfdfd;
  padding: 2rem 0;
`;
const ClientsTextBox = styled.div`
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
    text-transform: capitalize;

    letter-spacing: 0.1rem;
    color: #000000cf;
    span {
      color: ${colors.mainColor};
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

const Home = () => {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    return () => {};
  }, []);

  const servicesData = [
    {
      heading: "Website development",
      para: "If you're looking for website design services, then look no further than our team at the best price. We specialize in PHP and HTML and can provide you with a stunning website that is sure to turn heads. Plus, our price is unbeatable.",
      img: web,
      path: "/services/website-development",
      ani: "fade-right",
    },
    {
      heading: "App development",
      para: "We're proud to offer top-quality app development services. We have a team of highly skilled and experienced software developers who are experts in various programming languages and platforms. They are able to develop custom software solutions that meet the specific needs of our clients.",
      img: app,
      path: "/services/app-development",
      ani: "fade-down",
    },
    {
      heading: "Digital Marketing",
      para: "We are excited to offer our digital marketing services to help you reach your target audience. We specialize in SEO, social media marketing, and email marketing, and we are confident that we can help you achieve your marketing goals.",
      img: digital,
      path: "/services/digital-marketing",
      ani: "fade-left",
    },
    {
      heading: "Custom Software",
      para: "We are proud to offer our custom software development services to you. We are dedicated to providing top quality services that will help you make the most of your data.We have a team of experienced and knowledgeable analysts who are ready to work with you to help you understand your data and make the most of it. ",
      img: custom,
      path: "/services/custom-software-development",
      ani: "fade-right",
    },
    {
      heading: "Cloud Migration Services",
      para: "Probo Entertainment Pvt Ltd is a leading provider of Cloud Migration Services. They leverage their expertise and partnerships with major cloud platforms like Google Cloud and AWS to facilitate seamless and efficient migration of your business workloads to the cloud.",
      img: cloud,
      path: "/services/cloud-migration-services",
      ani: "fade-down",
    },
    {
      heading: "UI/UX Designing",
      para: "Probo Entertainment Pvt Ltd excels in providing UI/UX Designing Services, creating intuitive, user-centric, and innovative digital experiences.",
      img: ui,
      path: "/services/ui-ux-designing",
      ani: "fade-left",
    },
  ];

  return (
    <MainBox>
      <Header />
      <ServicesOuterBox>
        <ServiceTextBox>
          <p data-aos="fade-left">truly prominent IT solutions</p>
          <h2 data-aos="fade-right">
            <span>Empowering your business</span>
            <span>
              with our <span>IT solutions.</span>
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
            <span>120</span>
            <p>Happy clients</p>
          </div>
          <div>
            <span>32</span>
            <p>FINISHED PROJECTS</p>
          </div>
          <div>
            <span>20</span>
            <p>SKILLED EXPERTS</p>
          </div>
          <div>
            <span>50</span>
            <p>MEDIA POSTS</p>
          </div>
        </div>
      </HistoryBox>
      <ClientsBox>
        <ClientsTextBox>
          <p>Testimonials</p>
          <h2>
            What Our <span>clients say</span>
          </h2>
        </ClientsTextBox>
        <Clients />
      </ClientsBox>
      <HomeContact />

      <Faq />
    </MainBox>
  );
};

export default Home;
