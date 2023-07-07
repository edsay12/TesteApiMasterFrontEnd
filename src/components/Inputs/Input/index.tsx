import { InputHTMLAttributes, forwardRef, useId } from "react";
import * as S from "./style";
type PropTypes = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  helperText?: string;
  borderColor?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, PropTypes>(
  (
    {
      name = "",
      type = "",
      label = "",
      helperText = "",
      borderColor = "",
      ...rest
    },
    ref
  ) => {
    const inputId = useId();
    const hasError = helperText?.length > 0;
    return (
      <>
        <S.Container>
          {label && <S.Label htmlFor={inputId}>{label}</S.Label>}
          <S.Input
            name={name}
            borderColor={borderColor}
            id={inputId}
            type={type}
            ref={ref}
            hasError={hasError}
            {...rest}
          />

          {helperText && <S.HelperText>{helperText}</S.HelperText>}
        </S.Container>
      </>
    );
  }
);

export { Input };
