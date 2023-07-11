import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.div<{ isModalOppen: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: rgb(1, 1, 1, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${({ isModalOppen }) => !isModalOppen && "none"};
  
`;



export const Modal = styled.div`
  width: 300px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  animation: ${fadeIn} .5s ease-out ;
`;

export const ModalHeader = styled.div`
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
`;
export const IcoContainer = styled.div`
  position: absolute;
  font-size: 30px;
  top: -20px;
  right: -20px;
  color: red;
  cursor: pointer;
`;
export const ModalSadIcon = styled.div`
  color: ${({ theme }) => theme.default.colors.purple};
  font-size: 50px;
`;

export const ModalBody = styled.div`
  margin-top: 20px;
`;

export const Question = styled.div`
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;
export const RateContainer = styled.div`
  font-size: 35px;
  text-align: center;
`;
export const GameName = styled.div`
  text-align: center;
  margin-bottom: 20px;
  color: rgb(1, 1, 1, 0.7);
`;
export const ModalFooter = styled.div`
  margin-top: 40px;
`;
