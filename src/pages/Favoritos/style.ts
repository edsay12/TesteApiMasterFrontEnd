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

export const OrderFilterContainer = styled.div`
  width: 100%;
  max-width: 100px;
  border: 1px solid ${({theme})=> theme.default.colors.gray};
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  justify-content: center;
  


`
export const OrderFilterIco = styled.div`



`
export const OrderFilterText = styled.p`
font-size: 10px;
font-weight: bold;



`