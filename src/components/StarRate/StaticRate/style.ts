import styled from "styled-components";


export const StartRate = styled.div`
  input[type="radio"] {
    display: none;
  }
`;
export const Star = styled.span<{rating:number,starValue:number }>`
  transition: color 0.5;
  color: #e4e5e9;
  color: ${({rating,starValue}) => starValue <= rating ? "#ffc107" : "#e4e5e9"};
`;
