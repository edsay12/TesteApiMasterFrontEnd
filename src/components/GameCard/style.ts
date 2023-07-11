
import styled, { css, keyframes } from "styled-components";

export const MovieCard = styled.div`
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  transition: all 0.5s;
`;

export const CardImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;
export const CardBotton = styled.div`
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: black;
`;
export const CardDetails = styled.div`
  font-size: 12px;
  color: #000000ea;
  display: flex;
  gap: 10px;
`;
export const CardTitle = styled.h1`
  font-size: 20px;
  width: 100%;

  white-space: nowrap;
  overflow: hidden;
`;
export const CardDescription = styled.p`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
`;

export const CardButton = styled.a`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.default.colors.purple};
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
  transition: all 0.5s;
`;
export const CardImageContainer = styled.div`
  position: relative;
`;

export const CardRatingContainer = styled.div`
  display: flex;
  
  align-items: center;
  justify-content: space-between;

`
const likeAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;
export const LikeIcon = styled.div<{isLiked : boolean }>`
  display: flex;
  align-items: center;
  font-size: 30px;
  color: #f34133;
  cursor: pointer;
  ${({isLiked}) => isLiked && css`animation: ${likeAnimation} 0.5s ease-in-out;`}
`;

export const CardRate = styled.div`
margin-top: 10px;
display: flex;
gap: 5px;
color: #8c8c8c;
align-items: center;

`
export const Rate = styled.div`
font-size: 10px;
`
export const NumberOfRates = styled.div`
font-size: 10px;
`

export const RateModalButton = styled.div`
color: black;
font-size: 10px;
text-decoration: underline;
cursor: pointer;

`