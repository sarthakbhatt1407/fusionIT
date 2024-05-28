import React from "react";
import styled from "styled-components";
import ContactsUs from "../components/ContactUs";
import Faq from "../components/Faq";

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

const Contact = () => {
  return (
    <MainBox>
      <HeaderBox>
        Contact Us
        <span>Home / Contact Us</span>
      </HeaderBox>
      <ContactsUs />
      <Faq />
    </MainBox>
  );
};

export default Contact;
