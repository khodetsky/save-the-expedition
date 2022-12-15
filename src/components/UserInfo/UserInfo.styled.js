import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonStyled = styled.button`
position: relative;
width: 150px;
border: 1px solid #FFFFFF;
border-radius: 25px;
padding: 9px 18px;

font-family: 'Raleway', sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 22px;

background: none;
color: #FFFFFF;
cursor: pointer;

:hover, :focus {
    color: #000000;
    border-color: #000000;
};`

export const UserButtonArrow = styled.svg`
width: 0;
height: 0;`

export const UserInfoBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
z-index: 3;
left: 915px;
top: 50px;

border-radius: 20px;
position: absolute;
width: 150px;
height: 103px;

background-color: #FFFFFF`

export const LinkToProfile = styled(Link)`
text-decoration: none;

font-family: 'Raleway', sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 22px;

color: #000000;`

export const MenuExitButton = styled.button`
border: none;
background: none;
padding: 9px 0;

font-family: 'Raleway', sans-serif;
font-weight: 700;
font-size: 16px;
line-height: 22px;

color: #000000;
cursor: pointer;`

export const MenuBackdrop = styled.div`
width: 100vw;
height: 100vh;
transition-property: opacity,visibility;
position: fixed;
z-index: 2;
top: 0;
left: 0;`

export const ButtonOpenMenu = styled.button`
position: relative;
z-index: 4;
width: 150px;
border: none;
border-radius: 25px;
padding: 9px 18px;

font-family: 'Raleway', sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 22px;

background: none;
color: #000000;
cursor: pointer;

:hover, :focus {
    color: #000000;
};`