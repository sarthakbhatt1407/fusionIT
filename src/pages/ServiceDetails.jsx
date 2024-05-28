import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import styled, { keyframes } from "styled-components";
import web from "../assets/web.jpg";
import app from "../assets/app.jpg";
import digital from "../assets/digital.jpg";
import custom from "../assets/custom.jpg";
import cloud from "../assets/cloud.jpg";
import ui from "../assets/ui.jpg";
import HomeContact from "../components/HomeContact";
import { Divider } from "@mui/material";
import Faq from "../components/Faq";
const pagesData = {
  webDevelopment: {
    title: "Web Development",
    img: web,
    paraPri:
      "Probo Entertainment Pvt Ltd is a Noida-based IT company that specializes in top-quality website development services. With extensive experience in the industry, we are the preferred choice for businesses seeking to establish a powerful online presence.",
    paraSec:
      "In today`s digital age, a website is crucial for establishing a brand`s credibility and reaching a wider audience. At Probo Entertainment Pvt Ltd, we specialize in creating custom websites tailored to our clients` unique needs.",
    paraOther:
      "We offer comprehensive website development services, including web design, front-end and back-end development, database management, and server configuration. Our client-centric approach ensures we deliver websites that meet and exceed their expectations.",
  },
  appDevelopment: {
    title: "App Development",
    img: app,
    paraPri:
      "Probo Entertainment Pvt Ltd Noida`s premier IT company for app development.With proficiency in diverse technologies like Java, Python, Ruby, our skilled developers follow a systematic approach to craft top-notch applications. Our process encompasses comprehending clients` requisites, creating designs, development, testing, and deploying.",
    paraSec:
      "We excel at crafting bespoke applications across diverse sectors - healthcare, education, retail, finance, and more. Our apps are robust, secure, and designed to deliver peak performance, even under heavy traffic.",
    paraOther:
      "We offer a comprehensive range of application development services, covering web, mobile, desktop, and cloud-based apps. Leveraging cutting-edge tools and technologies, we create solutions that are intuitive, aesthetically pleasing, and optimized for SEO.",
  },
  digitalMarketing: {
    title: "Digital Marketing",
    img: digital,
    paraPri:
      "Probo Entertainment Pvt Ltd is a leading digital marketing service provider in Nodia. We cater to businesses of all sizes and industries with a wide range of digital marketing services. Our team of experienced professionals is committed to delivering exceptional solutions that help our clients achieve their business objectives.",
    paraSec:
      "At Probo Entertainment Pvt Ltd, we provide customized digital marketing solutions to suit the unique needs of each business. Our services are aimed at bolstering online presence, enhancing brand visibility, and effectively engaging the target audience.",
    paraOther:
      "We can help your business create engaging content that connects with your audience and drives interaction. Additionally, our email marketing services can foster customer relationships and encourage repeat business.",
  },
  customSoftwareDevelopment: {
    title: "Custom Software Development",
    img: custom,
    paraPri:
      "Need a reliable software development partner to build custom, scalable, and intuitive apps? Look to Probo Entertainment Pvt Ltd - Noida`s top software development company.",
    paraSec:
      "Probo Entertainment Pvt Ltd excels in creating customized software solutions for businesses of all types and sizes. Our skilled developers and designers work closely with clients to comprehend their unique needs and deliver personalized solutions that go beyond expectations.",
    paraOther:
      "Whether you need a web application, mobile app, or desktop software, we have the expertise and experience to deliver solutions that help you achieve your business goals. We use the latest tools and technologies to ensure that our software applications are fast, secure, and easy to use. ",
  },
  cloudMigrationServices: {
    title: "Cloud Migration Services",
    img: cloud,
    paraPri:
      "Probo Entertainment Pvt Ltd is a leading provider of Cloud Migration Services. They leverage their expertise and partnerships with major cloud platforms like Google Cloud and AWS to facilitate seamless and efficient migration of your business workloads to the cloud.",
    paraSec:
      "Their services are designed to help businesses transform their processes and achieve significant business value. They offer comprehensive cloud migration solutions, including discovery and assessment of your current infrastructure, planning and implementation of the migration strategy, and post-migration support and optimization",
    paraOther:
      "With Probo Entertainment’s Cloud Migration Services, businesses can enjoy the benefits of cloud computing, including cost savings, scalability, and enhanced business agility, while minimizing the risks and challenges associated with the migration process. Whether you’re moving a single application or your entire IT infrastructure to the cloud, Probo Entertainment has the expertise and resources to make your cloud migration journey a succes. ",
  },
  uiUxDesigning: {
    title: "UI/UX Designing",
    img: ui,
    paraPri:
      "Probo Entertainment Pvt Ltd excels in providing UI/UX Designing Services, creating intuitive, user-centric, and innovative digital experiences.",
    paraSec:
      "They are committed to creating user interfaces that are intuitive, engaging, and tailored to the needs of the end-user. Their team of experienced designers uses a human-centered approach, focusing on understanding and meeting the needs of the users.",
    paraOther:
      "They work closely with clients to create designs that not only look good but also enhance the user experience, leading to increased user engagement and business growth. Whether you’re a startup or an established business, Probo Entertainment Pvt Ltd can help you create a digital experience that resonates with your target audience.",
  },
};

const OuterBox = styled.div``;

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
`;

const SectionBox = styled.section`
  display: grid;
  padding: 1rem 2rem;
  grid-template-columns: 1fr 1.5fr;
  height: fit-content;
  width: 90%;
  margin: 0 auto;
`;

const LeftBox = styled.div`
  box-shadow: 0.2rem 0.2rem 1rem #bfbfbf;
  border-radius: 0.6rem;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h2 {
    margin: 0;
    color: #1c6cc8;
    font-size: 2rem;
    letter-spacing: 0.09rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  p {
    margin: 0;
    font-size: 1.1rem;
    color: #000000ae;
    text-align: justify;
    letter-spacing: 0.08rem;
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
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 85%;
    border-radius: 0.6rem;
    animation: ${Ani} 2s;
    animation-iteration-count: infinite;
  }
`;

const ServiceDetails = () => {
  const { page } = useParams();
  const [data, setData] = useState(null);

  const pageFether = (page) => {
    const obj = pagesData[page];
    setData(obj);
  };

  useEffect(() => {
    if (page === "website-development") {
      pageFether("webDevelopment");
    }
    if (page === "app-development") {
      pageFether("appDevelopment");
    }
    if (page === "digital-marketing") {
      pageFether("digitalMarketing");
    }
    if (page === "custom-software-development") {
      pageFether("customSoftwareDevelopment");
    }
    if (page === "cloud-migration-services") {
      pageFether("cloudMigrationServices");
    }
    if (page === "ui-ux-designing") {
      pageFether("uiUxDesigning");
    }
    return () => {};
  }, [page]);

  return (
    <OuterBox>
      {data && (
        <MainBox>
          <HeaderBox>
            <h1>{data.title}</h1>

            <p>Probo Entertainment Pvt. Ltd.</p>
          </HeaderBox>
          <SectionBox>
            <LeftBox>
              <h2>
                {data.title} <Divider />
              </h2>

              <p>{data.paraPri}</p>
              <p>{data.paraSec}</p>
              <p>{data.paraOther}</p>
            </LeftBox>
            <RightBox>
              <img src={data.img} alt="" />
            </RightBox>
          </SectionBox>
          <HomeContact />
          <Faq />
        </MainBox>
      )}
    </OuterBox>
  );
};

export default ServiceDetails;
