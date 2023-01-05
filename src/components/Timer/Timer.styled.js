import styled, { keyframes } from "styled-components";

const timerColor = keyframes`
    0% {
      color: #f53e3e;
    }

    100% {
      color: #f53e3e;
    }
`

const timerSize = keyframes`
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scaleY(1);
    }
`


export const TimerBox = styled.div`
    margin-left: 300px;
`

export const Text = styled.p`
    font-family: 'Luckiest Guy', cursive;
    font-weight: 400;
    font-size: 32px;
    line-height: 22px;
    color: #FFFFFF;

    animation: ${timerColor} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards 110s,
    ${timerSize} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards 14 110s;
`