import styled from "styled-components";
import bgImg from '../../images/Background.png';
import { Link } from "react-router-dom";

export const MainImg = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 1280px;
    min-height: 100vh;
    background-color: #1a1a76;
    background-image: url( ${bgImg} );
`

export const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 auto;
    align-items: center;
`

export const MainTitle = styled.h1`
    margin-top: 200px;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    color: #FFFFFF;
`

export const MainText = styled.p`
    width: 720px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
    text-align: center;
    color: #FFFFFF;
`

export const MainButtonLink = styled(Link)`
    text-decoration: none;
    padding: 16px 21px;
    border-radius: 20px;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: #FFFFFF;


    :hover, :focus {
        color: #000000;
    };
`

export const MainButton = styled.button`
    margin-top: 60px;

    width: 270px;
    height: 60px;
    border-radius: 100px;
    border: none;

    background-color: #E93A7D;
    cursor: pointer;
`