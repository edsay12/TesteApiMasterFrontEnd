import styled from "styled-components";



export const ErrorMessage = styled.h1`
    width: 100%;
    margin-top: 20px;
    color: black;
    text-transform: uppercase;
    text-justify: auto;
    justify-content: center;
    max-width: 400px;
    text-align: center;
    
    
    span{
        color: ${({theme})=> theme.default.colors.purple};
    }
`
export const ErrorContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    justify-content: center;

`
export const ErrorImage = styled.img`
    width: 100%;
    max-width: 500px;

`