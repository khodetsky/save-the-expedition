import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonStyled = styled.button`
position: relative;
z-index: 3;
width: 100px;
border: 1px solid #FFFFFF;
border-radius: 25px;
padding: 9px 18px;

font-family: 'Raleway', sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 22px;

background: none;
color: #FFFFFF;

:hover {
    color: #000000;
    border-color: #000000;
};
:focus {
    color: #000000;
    border: none;
}`

export const UserButtonArrow = styled.svg`
width: 0;
height: 0;`

export const UserInfoBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
z-index: 1;
left: 965px;
top: 50px;

border-radius: 20px;
position: absolute;
width: 100px;
height: 104px;
padding-top: 40px;

background-color: #FFFFFF`

export const LinkToProfile = styled(Link)`
text-decoration: none;
margin-bottom: 10px;

font-family: 'Raleway', sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 22px;

color: #000000;`

export const MenuExitButton = styled.button`
border: none;
background: none;
cursor: pointer;

font-family: 'Raleway', sans-serif;
font-weight: 700;
font-size: 16px;
line-height: 22px;

color: #000000;`