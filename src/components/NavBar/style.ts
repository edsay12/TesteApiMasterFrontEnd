import styled, { keyframes } from "styled-components";

export const ResponsiveIcon = styled.a`
  color: ${({ theme }) => theme.default.colors.purple};
  display: none;
`;

export const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  

  li {
    a {
      color: ${({ theme }) => theme.default.colors.purple};
      text-decoration: none;
      font-weight:600;
      position: relative;
      &::before {
        content: "";
        width: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.default.colors.purple};
        position: absolute;
        bottom: -8px;
      }
      &:hover {
        transition: opacity 1s;
        opacity: 0.8;
        &::before {
          transition: width 1s;
          width: 100%;
        }
      }
    }

    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
`;

const headerAparece = keyframes`
  from {
    opacity: 0.5;
    transform: translateY(0);
  }
  
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const NavBarContainer = styled.div`
  width: 100%;
  

  @media screen and (max-width: 763px) {
    ${NavbarLinks} {
      display: none;
      
    }
    ${ResponsiveIcon} {
      display: block;
    }

    &.open {
      
      align-items: center;
      z-index: 10000000;
      position: relative;
      right: 0;

      ${ResponsiveIcon} {
        position: fixed;
        top: 26px;
        right: 26px;
        z-index: 1000;
        position: absolute;
      }

      ${NavbarLinks} {
        height: 200px;
        position: fixed;
        top: 40px;
        right: 40px;
        width: 200px;
        animation: ${headerAparece} 1s forwards;
        position: absolute;
        

        display: flex;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
        border-radius: 5px;
        padding: 40px;

        display: flex;
        cursor: default;

        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .logo {
        opacity: 0;
        cursor: none;
      }
    }
  }

  &.close {
    transition: all 1s;
  }
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

  font-size: 20px;
  color: ${({ theme }) => theme.default.colors.purple};
`;

export const NavBarTitle = styled.h1`
  color: ${({ theme }) => theme.default.colors.purple};
  font-size: 20px;
`;
