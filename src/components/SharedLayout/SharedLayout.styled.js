import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding: 30px 215px 0 215px ;
    width: 1280px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    z-index: 6;

    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
`

export const HeaderLeft = styled.div`
    align-items: center;
    display: inline-flex;
`

export const Header = styled.header`
    margin-left: auto;
    margin-right: auto;
    width: 1280px;
    position: relative;
`

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    margin-left: 30px;
    color: #FFFFFF;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        color: #38bddb;
    };

    &.active {
        color: #38bddb;
    };
`

export const NavLinkRight = styled(NavLink)`
    text-decoration: none;
    margin-right: 30px;
    color: #FFFFFF;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        color: #38bddb;
    };
    &.active {
        color: #38bddb;
    };`

export const SignUpButton = styled.button`
    border: 1px solid #FFFFFF;
    border-radius: 25px;
    padding: 9px 18px;

    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    background: none;
    color: #FFFFFF;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        color: #38bddb;
        border-color: #38bddb;
    };
`

export const HeaderRightBox = styled.div`
    display: flex;
    align-items: center;
`