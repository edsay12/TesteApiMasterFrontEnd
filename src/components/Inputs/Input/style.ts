import styled, { css } from "styled-components";

export const Input = styled.input<{ hasError: boolean; borderColor: string }>`
  min-width: 200px;
  width: 100%;
  flex: 1;

  padding: 10px;
  border: 1px solid
    ${({ borderColor, theme }) =>
      borderColor ? borderColor : theme.default.colors.gray};
  outline: none;
  border-radius: 5px;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: red;
    `}
  ${({ hasError }) =>
    !hasError &&
    css`
      &:focus {
        border: 1px solid ${({ theme }) => theme.default.colors.purple};
      }
    `}
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`;
export const Label = styled.label`
  color: black;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: lighter;
`;
export const HelperText = styled.p`
  color: red;
  margin-top: 0.5rem;
  font-size: 10px;
  &::first-letter {
    text-transform: uppercase;
  }
`;
