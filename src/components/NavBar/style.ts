import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 100%;
  

`;
export const NavBar = styled.nav`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 25px;

`;

export const NavbarLogo = styled.a`
  display: flex;
  max-width: 200px;
  width: 100%;
  text-decoration: none;
  gap: 10px;
 
  font-size:20px;
  color: ${({ theme }) => theme.default.colors.purple};
`;


export const NavBarTitle = styled.h1`
   color: ${({ theme }) => theme.default.colors.purple};
   font-size: 20px;
`