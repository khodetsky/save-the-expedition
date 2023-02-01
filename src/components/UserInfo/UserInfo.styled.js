import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonStyled = styled.button`
    position: relative;
    border: 1px solid #FFFFFF;
    border-radius: 25px;
    padding: 9px 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;

    background: none;
    color: #FFFFFF;
    cursor: pointer;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        color: #38bddb;
        border-color: #38bddb;
    };
`

export const UserButtonArrow = styled.svg`
    margin-left: 5px;
    width: 15px;
    height: 15px;
`

export const UserButtonIcon = styled('use')`
    stroke: none;
    fill: #FFFFFF;
    width: 15px;
    height: 15px;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

    ${ButtonStyled}:hover &, ${ButtonStyled}:focus & {
        fill: #38bddb;
    };
`

export const MenuTriangleBox = styled.svg`
    position: absolute;
    z-index: 3;
    left: 1012px;
    top: 77px;
`

export const UserInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    left: 953px;
    top: 90px;

    border-radius: 8px;
    padding: 10px 10px 5px 10px;
    position: absolute;

    background-color: #FFFFFF;
`

export const LinkToProfile = styled(Link)`
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    text-decoration: none;

    color: #000000;
`

export const MenuExitButton = styled.button`
    border: none;
    background: none;
    padding: 5px 5px;

    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;

    color: #000000;
    cursor: pointer;
`

export const MenuBackdrop = styled.div`
    width: 100vw;
    height: 100vh;
    transition-property: opacity,visibility;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
`