import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  margin-top: 100px;
  border-top: 1px solid ${({ theme }) => theme.default.colors.gray};
  

`;
export const Text = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 25px;
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.default.colors.purple};
  }

`;
