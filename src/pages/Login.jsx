import React, { useEffect } from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  /* margin-top: 7%;
  @media only screen and (min-width: 0px) and (max-width: 900px) {
    margin-top: 20%;
  } */
`;

const Login = () => {
  useEffect(() => {
    window.otpless = (otplessUser) => {
      console.log(otplessUser);
    };
  }, []);
  return (
    <MainDiv>
      <div id="otpless-login-page"></div>
    </MainDiv>
  );
};

export default Login;
