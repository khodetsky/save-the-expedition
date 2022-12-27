import styled from "styled-components";

export const Button = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 12px;
    border: none;

    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 22px;

    cursor: pointer;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.75);

    :hover, :focus {
        transform: scale(1.25);
    };
`