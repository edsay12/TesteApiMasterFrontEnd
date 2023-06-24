import {InputHTMLAttributes } from "react";
import * as S from './style'
type PropTypes = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ onChange, ...rest }: PropTypes) {
  return <S.Input {...rest} onChange={(e) => onChange(e)} />;
}
