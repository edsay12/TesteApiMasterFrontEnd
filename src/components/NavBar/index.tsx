import * as S from "./style";
import { SiMonogame } from "react-icons/si";
import { AiFillHome, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
function NavBar() {
  const [isResposiveNavbarOpen, setResposiveNavbarOpen] = useState(false);
  const modal = window.document.querySelector("body");
  if (isResposiveNavbarOpen) {
    modal?.classList.add("modalOppen");
  } else {
    modal?.classList.remove("modalOppen");
  }
  return (
    <S.NavBarContainer className={isResposiveNavbarOpen ? "open" : "close"}>
      <S.NavBar>
        <S.NavbarLogo href="#">
          <SiMonogame />
          <S.NavBarTitle>Gamerfinder</S.NavBarTitle>
        </S.NavbarLogo>
        <S.NavbarLinks>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favoritos">Favoritos</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
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
