import styled from "styled-components";
import gamerbg from "../../assets/Img/gamerbg.jpg";

export const LoginContainer = styled.section`
  height: 100vh;
  background-image: url(${gamerbg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

 
  
`;
export const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
  background-color: white;
  height: 100%;
  max-height:calc(500px + 100px);
  border-radius: 17px;
  border: 1px solid black;
  padding: 50px;
 
  box-sizing: border-box;
`;
export const FormTitle = styled.h3`
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  max-width: 300px;
  margin: 0 auto;
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
    opacity: 0.8;
  }
`;
