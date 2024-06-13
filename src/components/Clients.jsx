import { Avatar, Rating } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";

import client from "../assets/client.jpg";

const OuterBox = styled.div`
  position: relative;
`;

const MainBox = styled.div`
  width: 80%;
  height: 40vh;
  margin: auto;
  position: relative;
  overflow: hidden;

  margin: 0 auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 251px) and (max-width: 949px) {
    height: 38vh;
    width: 99%;
    margin-bottom: 5rem;
    overflow: visible;
  }
`;

const ImgBox = styled.div`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 1s;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media only screen and (min-width: 251px) and (max-width: 949px) {
    gap: 1rem;
    grid-template-columns: 1fr;
  }
`;
const ReviewBox = styled.div`
  border-radius: 0.4rem;
  /* background-color: #f4f4f4; */
  box-shadow: 0.1rem 0.1rem 0.6rem #eeeeee6b;
  height: 23vh;

  padding: 2rem 1rem;
  span {
    color: #d91b01;
    transform: scale(1.1);
  }
  p {
    width: 80%;
  }
  @media only screen and (min-width: 251px) and (max-width: 949px) {
    padding: 1rem 0.5rem;
    p {
      width: 95%;
    }
  }
`;

const ProfileBox = styled.div`
  display: flex;
  justify-content: start;
  gap: 1rem;
  align-items: center;
  span {
    color: black;
    font-size: 1.4rem;
  }
  @media only screen and (min-width: 251px) and (max-width: 949px) {
    gap: 0.7rem;
    span {
      font-size: 1.2rem;
    }
  }
`;

const Clients = (props) => {
  const imageLeft = () => {
    const images = document.querySelectorAll(".image");

    images.forEach((slide, ind) => {
      slide.style.left = `${ind * 100}%`;
    });
  };
  setTimeout(() => {
    imageLeft();
  }, 1);
  const slider = () => {
    const images = document.querySelectorAll(".image");
    images.forEach((slide) => {
      slide.style.transform = `translateX(-${current * 100}%)`;
    });
  };

  let current = 0;
  //   const prev = () => {
  //     const images = document.querySelectorAll(".image");
  //     if (current > 0) {
  //       current--;
  //       slider();
  //     } else {
  //       current = images.length - 1;
  //       slider();
  //     }
  //   };

  const next = () => {
    const images = document.querySelectorAll(".image");

    if (current < images.length - 1) {
      current++;
      slider();
    } else {
      current = 0;
      slider();
    }
  };

  useEffect(() => {
    const intv = setInterval(() => {
      next();
    }, 2500);
    return () => {
      clearInterval(intv);
    };
  });

  return (
    <OuterBox>
      {/* data-aos="fade-right"  data-aos="fade-up"*/}
      <MainBox>
        <ImgBox className="image">
          <ReviewBox>
            <Rating name="read-only" value={5} readOnly />
            <p>
              Probo Entertainment's digital marketing service is top notch! They
              helped me spread the word about my business and attract more
              customers. I'm really happy with their service.
            </p>
            <ProfileBox>
              {/* <Avatar alt="Remy Sharp" src={client} /> */}
              <span>Anant Mishra</span>
            </ProfileBox>
          </ReviewBox>

          <ReviewBox>
            <Rating name="read-only" value={5} readOnly />
            <p>
              Probo Entertainment has been a great help in getting our website
              up and running. They were very efficient and provided quality
              service. We are very happy with the final product.
            </p>
            <ProfileBox>
              {/* <Avatar alt="Remy Sharp" src={client} /> */}
              <span>Dilip Singh</span>
            </ProfileBox>
          </ReviewBox>
        </ImgBox>

        <ImgBox className="image">
          <ReviewBox>
            <Rating name="read-only" value={5} readOnly />
            <p>
              I have been working with Probo Entertainment for a while now and I
              have to say that I am very happy with their work. They are always
              professional and deliver quality work. I would recommend them to
              anyone looking for a good company.
            </p>
            <ProfileBox>
              {/* <Avatar alt="Remy Sharp" src={client} /> */}
              <span>Akash Sharma</span>
            </ProfileBox>
          </ReviewBox>
          <ReviewBox>
            <Rating name="read-only" value={5} readOnly />
            <p>
              This company is really great! They helped me set up my Facebook
              Ads campaign and it was a huge success. They are very responsive
              and always available to help.
            </p>
            <ProfileBox>
              {/* <Avatar alt="Remy Sharp" src={client} /> */}
              <span>Sarthak Bhatt</span>
            </ProfileBox>
          </ReviewBox>
        </ImgBox>
      </MainBox>
    </OuterBox>
  );
};

export default Clients;
