import * as S from "./style";
import { SiMonogame } from "react-icons/si";
import { Link} from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";

import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

function NavBar() {
  const [isResposiveNavbarOpen, setResposiveNavbarOpen] = useState(false);
  const { user} = useAuth();

      
 

  return (
    
    <S.NavBarContainer className={isResposiveNavbarOpen ? "open" : "close"}>
      <S.NavBar>
        <S.NavbarLogo href="#">
          <SiMonogame />
          <S.NavBarTitle>Gamerfinder</S.NavBarTitle>
        </S.NavbarLogo>
        <S.NavbarLinks>
          <li>
            <Link to="/" onClick={() => setResposiveNavbarOpen(false)}>
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link to="/favoritos" onClick={() => setResposiveNavbarOpen(false)}>
              {" "}
              Favoritos
            </Link>
          </li>
          {!user && (
            <li>
              <Link to="/auth" onClick={() => setResposiveNavbarOpen(false)}>
                Login
              </Link>
            </li>
          )}
          {user && (
            <li>
              <Link to={'/account'}>
               Conta
              </Link>
            </li>
          )}
        </S.NavbarLinks>
        <S.ResponsiveIcon>
          {isResposiveNavbarOpen ? (
            <IoMdClose onClick={() => setResposiveNavbarOpen(false)} />
          ) : (
            <TiThMenu onClick={() => setResposiveNavbarOpen(true)} />
          )}
        </S.ResponsiveIcon>
      </S.NavBar>
    </S.NavBarContainer>
  );
}

export default NavBar;
