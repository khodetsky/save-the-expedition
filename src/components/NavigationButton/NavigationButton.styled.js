import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonNavLink = styled(Link)`
    text-decoration: none;
    padding: 16px 21px;
    border-radius: 20px;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: #000000;
`
export const Button = styled.button`
    margin-top: 60px;

    width: 270px;
    height: 60px;
    border-radius: 100px;
    border: none;
    background-color: #38bddb;

    cursor: pointer;

    &:hover, &:focus {
        background-color: #29a0bb;
    };
`