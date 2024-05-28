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
  font-weight: bold;
  font-size: 3rem;
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

const Contact = () => {
  return (
    <MainBox>
      <HeaderBox>Contact Us</HeaderBox>
      <ContactsUs />
      <Faq />
    </MainBox>
  );
};

export default Contact;
