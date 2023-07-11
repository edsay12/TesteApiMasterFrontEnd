import styled from "styled-components";
import gamerbg from "../../assets/Img/gamerbg.jpg";
import { Link } from "react-router-dom";

export const LoginContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${gamerbg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 50px;
`;
export const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background-color: white;
  height: 100%;
  border-radius: 17px;
  border: 1px solid black;
  padding: 50px 100px;
`;
export const FormTitle = styled.h3`
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 27px;
  margin-top: 48px;
`;
export const ForgotPassWordLink = styled.a`
  display: block;
  text-align: end;
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
  font-size: 15px;
  margin-top: 20px;
  &:hover {
    color: ${({ theme }) => theme.default.colors.purple};
  }
`;
export const BottonDetails = styled.div``;

export const BottonLink = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-decoration: underline;
  cursor: pointer;
  gap: 10px;
  color: ${({ theme }) => theme.default.colors.purple};
  justify-content: center;
  &:hover {
    opacity:0.8;
  }
`;
