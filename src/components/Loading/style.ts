import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  min-height: 200px;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Loading = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: ${({theme})=> theme.default.colors.purple} transparent ${({theme})=> theme.default.colors.purple} transparent ;
    animation: dualRing 1.2s linear infinite;
  }

  @keyframes dualRing {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
