import { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styled";

type ButtonProps = {
  children: ReactNode;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({children,isLoading = false,...rest}: ButtonProps) {
  return <S.Button isDisable={isLoading} {...rest} disabled={isLoading}>{children}</S.Button>;
}

export default Button;
