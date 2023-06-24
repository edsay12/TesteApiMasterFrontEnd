import styled from "styled-components";



export const ErrorMessage = styled.h1`
    
    color: black;
    text-transform: uppercase;
    
    span{
        color: ${({theme})=> theme.default.colors.purple};
    }
`
export const ErrorContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const ErrorImage = styled.img`
    width: 100%;
    max-width: 500px;

`