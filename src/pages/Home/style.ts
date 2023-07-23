import styled from "styled-components";



export const Conteudo = styled.div`
    width: 100%;
    padding: 20px 0px;
    
   

`
  


export const BannerText = styled.h2`
  font-size: 30px;
  span {
    color: ${({ theme }) => theme.default.colors.purple};
  }
`;

export const ShowMoreContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;


`