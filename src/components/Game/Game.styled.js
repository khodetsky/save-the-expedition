import styled from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    width: 1280px;
    min-height: 100vh;

    background-color: #4c4f68;
`

export const Main = styled.main`
    flex: 1 1 auto;
`

export const InfoGameBox = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    background-color: #4c4f68;

    padding-left: 215px;
    padding-right: 215px;
`

export const DataGameBox = styled.div`
    width: 60%;
    height: 300px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const BatteryBox = styled.div`
    width: 40%;
    height: 300px;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const GoBackBtn = styled.button`
    border: 1px solid #FFFFFF;
    border-radius: 25px;
    padding: 0;
    margin-left: 20px;

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
        color: #000000;
        border-color: #000000;
    };
`

export const ButtonLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 12px;
`

export const TimerContainer = styled.div`
    padding-top: 170px;
    padding-bottom: 10px;
    padding-left: 215px;
    padding-right: 215px;

    display: flex;
    align-items: center;
`

export const GoBackBtnArrow = styled.svg`
margin-right: 5px;
width: 15px;
height: 15px;
`

export const GoBackBtnIcon = styled('use')`
stroke: none;
fill: #FFFFFF;
width: 15px;
height: 15px;
transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

    ${GoBackBtn}:hover &, ${GoBackBtn}:focus & {
        fill: #000000;
    };
`