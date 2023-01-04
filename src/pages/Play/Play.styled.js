import styled from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    width: 1280px;

    background-color: #4c4f68;
`

export const Main = styled.main`
    flex: 1 1 auto;
`

export const LinkList = styled.ul`
    padding-top: 150px;
    padding-left: 215px;
    padding-right: 215px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

export const LinkStyled = styled(Link)`
    text-decoration: none;
`

export const ListLinkItem = styled.li`
    position: relative;
`

export const CategoryImg = styled.img`
    width: 270px;
    height: 200px;
    border-radius: 15px;

    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px 0px, rgba(0, 0, 0, 0.22) 0px 15px 12px 0px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    ${LinkStyled}:hover &, ${LinkStyled}:focus & {
        transform: scale(1.1)
    };
`

export const CategoryText = styled.p`
    position: absolute;
    top: 40px;
    left: 20px;
    width: 220px;
    color: black;
    font-family: 'Rubik Spray Paint', cursive;
    font-size: 32px;
    text-align: center;

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    ${LinkStyled}:hover &, ${LinkStyled}:focus & {
        transform: scale(1.15)
    };
`