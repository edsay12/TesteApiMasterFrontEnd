import styled, { css } from "styled-components";

type ButtonProps = {
    isDisable:boolean
}

export const Button = styled.button<ButtonProps>`
    min-width: 200px;
    padding: 10px;
    outline: none;
    border-radius: 5px;
    background-color: rgb(68, 65, 178);
    font-size: 15px;
    border: none;
    font-weight: bold;
    color: white;
    cursor: pointer;
    ${({ isDisable }) => isDisable && (
    css`
      opacity: 0.5;
      cursor: wait;
    `
  )}
    &:hover{
        opacity: 0.8;
    }

`
