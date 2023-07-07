import styled from "styled-components";

export const Input = styled.input`
  min-width: 200px;
  width: 100%;
  flex: 1;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.default.colors.gray};
  outline: none;
  border-radius: 5px;
  
  &:focus{
    border: 1px solid ${({ theme }) => theme.default.colors.purple};

  }
`;
