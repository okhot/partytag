import React from "react";
import styled from "@emotion/styled";
import authImg from "../public/assets/authImage.png";
import Image from "next/image";
import authBackground from "../public/assets/danny-howe-bn-D2bCvpik-unsplash.jpg";

const AuthPage = styled.div`
  height: 100vh;
  background-image:  linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url("/assets/danny-howe-bn-D2bCvpik-unsplash.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(url("/assets/danny-howe-bn-D2bCvpik-unsplash.jpg"));
  ;
  `;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: mulish;
  justify-content: center;

  & > input {
    height: 40px;
    width: 500px;
    border-radius: 5px;
    padding: 0px 20px;
    margin-bottom: 20px;
    font-size: 15px;
    font-family: mulish;
    border: 0px;
  }
`;

const AuthText = styled.h1`
  font-family: mulish;
  font-size: 60px;
  color: #fff;
`

const Authcheck = styled.div`
display: flex;
`

export default function Auth() {
  return (
    <>
      <AuthPage>
        <AuthCard>
          <AuthText>
            Get Onboard
          </AuthText>
          <AuthForm>
            <input placeholder="User"></input>
            <input placeholder="Email" type="email"></input>
            <input placeholder="Password" type="password"></input>
          </AuthForm>
          <Authcheck>
          <input type="checkbox"  name="check" value="checked" />
          <label htmlFor="check"> Do you accept the terms and conditions</label>
          </Authcheck>
        </AuthCard>
      </AuthPage>
    </>
  );
}
