import styled, { keyframes } from "styled-components";

const leftPartAnimation = keyframes`
    0% {
      transform: translate(0, 0);
    }

    50% {
      transform: translate(0, 150px);
    }

    100% {
      transform: translate(40px, 150px);
    }
`

const rightPartAnimation = keyframes`
    0% {
      transform: translate(0, 0);
    }

    50% {
      transform: translate(0, -150px);
    }

    100% {
      transform: translate(-45px, -150px);
    }
`

const redLineAnimation = keyframes`
    0% {
        opacity: 1;
        transform: scaleY(0);
        background-color: #fafd4a;
    }

    50% {
        opacity: 1;
        transform: scaleY(84);
    }

    60% {
        background-color: #ff8100;
    }

    100% {
        opacity: 1;
        background-color: grey;
        transform: scaleY(84);
    }
`

const textAnimation = keyframes`
    0% {
      opacity: 0;
      color: #FFFFFF;
    }

    40% {
        opacity: 1;
      color: #fafd4a;
    }

    70% {
      color: #ff8100;
    }

    100% {
      opacity: 1;
      color: black;
    }
`

export const Card = styled.div`
    position: relative;

    width: 70px;
    height: 90px;
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px 0px, rgba(0, 0, 0, 0.22) 0px 15px 12px 0px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 50px;
    line-height: 22px;
`

export const Text = styled.p`
    position: relative;
    z-index: 3;
    opacity: 0;

    &.guessed {
        animation: ${textAnimation} 3s cubic-bezier(0.4, 0, 0.2, 1) forwards 2500ms;
    }
`

export const LeftPartCard = styled.div`
    position: absolute;
    z-index: 2;
    left: -40px;
    top: -150px;
    display: flex;
    justify-content: flex-end;

    width: 35px;
    height: 90px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    border-left: 3px solid black;

    background-color: #9d9d9d;

    &.guessed {
        animation: ${leftPartAnimation} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    };
`

export const RightPartCard = styled.div`
    position: absolute;
    z-index: 2;
    left: 80px;
    top: 150px;
    display: flex;
    justify-content: flex-start;

    width: 35px;
    height: 90px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    border-right: 3px solid black;

    background-color: #9d9d9d; 

    &.guessed {
        animation: ${rightPartAnimation} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    };
`

export const RedLine = styled.div`
    transform-origin: top center;
    background-color: red;
    width: 2px;
    height: 1px;

    &.guessed {
        animation: ${redLineAnimation} 2s cubic-bezier(0.4, 0, 0.2, 1) forwards 1000ms;
    };
`