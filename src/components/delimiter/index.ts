import styled from "styled-components";

type delimiterTypes = {
  color?: string;
  marginTop?: string;
  fontSize?: string;
};

export const Delimiter = styled.div<delimiterTypes>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ color }) => (color ? color : "black")};
  width: 100%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
  flex: 1;
  margin-bottom: 20px;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "20px")};

  gap: 20px;
  &::after {
    content: "";
    flex: 1;

    background-color: ${({ color }) => (color ? color : "#0000008a")};
    height: 2px;
  }
  &::before {
    content: "";
    flex: 1;
    background-color: ${({ color }) => (color ? color : "#0000008a")};
    height: 2px;
  }
`;
