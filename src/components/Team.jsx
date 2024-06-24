import React from "react";
import param from "../assets/param.jpg";
import manoj from "../assets/manoj.jpg";
import teamMem from "../assets/teamMem.jpg";
import styled from "styled-components";

const MainBox = styled.div`
  display: flex;
  justify-content: start;
  gap: 3rem;
  padding: 1rem 4rem;
  background-color: #f8f8f8;
  margin: 1rem 0;
  @media only screen and (min-width: 0px) and (max-width: 900px) {
    padding: 1rem;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  background-color: white;
  width: 20rem;
  height: 25rem;
  border-radius: 0.6rem;
  gap: 0.3rem;
  justify-content: space-between;
  box-shadow: 0.2rem 0.2rem 1rem #ababab;
  img {
    width: 15rem;
    height: 20rem;
    border-radius: 0.6rem;
  }
  h2 {
    margin: 0.2rem 0;
  }
  p {
    color: #000000ac;
  }
  @media only screen and (min-width: 0px) and (max-width: 900px) {
  }
`;

const Team = () => {
  const data = [
    {
      name: "Param Yadav",
      img: param,
      key: 0,
      des: "Managing Director",
    },
    {
      name: "Manoj Kumar",
      img: manoj,
      key: 1,
      des: "Managing Director",
    },
    {
      name: "Team Members",
      img: teamMem,
      key: 1,
      des: "Team",
    },
  ];

  return (
    <MainBox>
      {data.map((d) => {
        return (
          <Card data-aos="fade-up" key={d.key}>
            <img src={d.img} alt="" />
            <h2>{d.name}</h2>
            <p>{d.des}</p>
          </Card>
        );
      })}
    </MainBox>
  );
};

export default Team;
