import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.default.colors.purple};

  align-items: center;
  justify-content: center;

  img {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  }

  .text {
    margin-top: 20px;
    font-size: 20px;
  }

  a {
    color:${({theme}) => theme.default.colors.purple};
    margin-top: 20px;
    border: 2px solid ${({theme}) => theme.default.colors.purple};
    padding: 10px 15px;
    border-radius: 20px;
    text-decoration: none;
  }
`;
