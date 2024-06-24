import React, { useEffect } from "react";
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

const Services = () => {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    return () => {};
  }, []);
  return (
    <MainBox>
      <HeaderBox>
        <h1>Services</h1>
      </HeaderBox>
      <BreadCumbBox>
        <span>Home / Services</span>
      </BreadCumbBox>
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
      <HomeContact />
      <Faq />
    </MainBox>
  );
};

export default Services;
