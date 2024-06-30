import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styled from "styled-components";
import { colors } from "../data";

const MainDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  div {
    background-color: #fdfdfd;
    border: none;
    margin: 0.5rem 0;
    /* box-shadow: 0.1rem 0.1rem 0.6r#e1e0e0eee; */
    box-shadow: none;
  }

  @media only screen and (min-width: 0px) and (max-width: 350px) {
    width: 95%;
  }
  @media only screen and (min-width: 351px) and (max-width: 549px) {
    width: 95%;
  }
  @media only screen and (min-width: 550px) and (max-width: 800px) {
    width: 95%;
  }
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
export default function Faq() {
  return (
    <MainDiv>
      {" "}
      <ClientsTextBox>
        <p>Queries</p>
        <h2>
          Frequently Asked <span>Questions</span>
        </h2>
      </ClientsTextBox>
      <Accordion id="faq">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            What is Your Working Strategy For Providing Best Services.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There is no one-size-fits-all answer to this question, as the best
            working strategy for providing services will vary depending on the
            business and the services being provided. However, some tips on
            providing great customer service include always being polite and
            attentive, providing clear and accurate information, and always
            following through on promises. Additionally, it is important to be
            flexible and willing to adjust the level.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            What services does your team at the best price provide in website
            design?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our team provides a wide range of website design services, from
            simple layout and design changes to complete website redesigns and
            custom development. We work with you to understand your needs and
            budget, and then provide you with a proposal for the services that
            best fit your needs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            What is the turnaround time for projects?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The turnaround time for projects is the estimated time it will take
            for the project to be completed.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            What Do You think About Your Customers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I believe that our customers are some of the most important people
            in our company. They provide valuable feedback that helps us improve
            our products and services. I always enjoy meeting and speaking with
            them.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </MainDiv>
  );
}
