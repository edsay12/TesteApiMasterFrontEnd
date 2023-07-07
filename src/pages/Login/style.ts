import styled from "styled-components";
import gamerbg from "../../assets/Img/gamerbg.jpg";

export const LoginContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${gamerbg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 20px;
`;
export const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background-color: white;
  height: 100%;
  border-radius: 17px;
  border: 1px solid black;
  padding: 97px 101px;
`;
export const FormTitle = styled.h3``;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 27px;
  margin-top: 48px;
`;
export const ForgotPassWordLink = styled.a`
  display: block;
  text-align: end;
  color:rgba(0, 0, 0, 0.7) ;
  text-decoration: none;
  font-size: 15px;
  
  margin-top: 20px;
`;
export const BottonDetails = styled.div``;
export const BottonText = styled.p``;
export const BottonLink = styled.a``;
