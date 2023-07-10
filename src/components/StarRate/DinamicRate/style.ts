import styled from "styled-components";
import { number } from "zod";

export const StartRate = styled.div`
  input[type="radio"] {
    display: none;
  }
`;
export const Star = styled.span<{ starValue:number,hover:number,rating:number }>`
  cursor: pointer;
  transition: color 0.5;
  color: #e4e5e9;
  color: ${({hover,rating,starValue}) => starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"};
`;
