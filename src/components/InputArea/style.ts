import styled from "styled-components";

export const InputArea = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  gap: 20px;
  padding: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #dadaf1;
  border-radius: 10px;

  input,
  select,
  button {
    min-width: 200px;
    flex: 1;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.default.colors.gray};
    outline: none;
    border-radius: 5px;
  }

  button {
    min-width: 200px;
    flex: 1;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.default.colors.gray};
    outline: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.default.colors.purple};
    font-size: 20px;
    border: none;
    font-weight: bold;
    color: white;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
