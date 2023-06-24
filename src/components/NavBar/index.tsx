import * as S from "./style";
import {SiMonogame} from 'react-icons/si'
function NavBar() {
  return (
    <S.NavBarContainer>
      <S.NavBar>
        <S.NavbarLogo href="#">
            <SiMonogame/>
            <S.NavBarTitle>
                Gamerfinder
            </S.NavBarTitle>
        </S.NavbarLogo>
      </S.NavBar>
    </S.NavBarContainer>
  );
}

export default NavBar;
