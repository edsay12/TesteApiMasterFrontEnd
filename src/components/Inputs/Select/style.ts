import styled from "styled-components";

export const Select = styled.select`
  min-width: 200px;
  flex: 1;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.default.colors.gray};
  outline: none;
  border-radius: 5px;
`;
