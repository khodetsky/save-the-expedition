import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const openModalOpacity = keyframes`
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
`

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    z-index: 4;

    padding: 20px;
    opacity: 0;

    background-color: rgba(0, 0, 0, 0.2);

    animation: ${openModalOpacity} 250ms cubic-bezier(0.4, 0, 0.2, 1) forwards ${(props) => props.animationDelay};
    overflow-y: scroll;
`

export const ModalStyled = styled.div`
    padding: 40px 20px;
    background-color: #FFFFFF;
    border-radius: 8px;
    width: 700px;
    height: auto;

    display: flex;
    align-items: center;
    flex-direction: column;
    opacity: 0;

    z-index: 5;
    position: absolute;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${openModalOpacity} 250ms cubic-bezier(0.4, 0, 0.2, 1) forwards ${(props) => props.animationDelay};
   
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px 0px, rgba(0, 0, 0, 0.22) 0px 15px 12px 0px;
`

export const BtnContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 40px;
`

export const Button = styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px 18px;
    width: 300px;
    height: 44px;

    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    letter-spacing: 1px;
    background-color: #7B61FF;
    cursor: pointer;

    border: none;
    border-radius: 8px;

    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        background-color: #7F56D9;
    };
`

export const NavButton = styled.button`
    box-sizing: border-box;
    // display: flex;
    // justify-content: center;
    // align-items: center;

    width: 300px;
    height: 44px;

    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    letter-spacing: 1px;
    background-color: #7B61FF;
    cursor: pointer;

    border: none;
    border-radius: 8px;

    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        background-color: #7F56D9;
    };
`

export const Text = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
`

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #FFFFFF;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`