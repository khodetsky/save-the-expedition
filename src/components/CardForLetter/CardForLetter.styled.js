import styled, { keyframes } from "styled-components";

const leftPartAnimation = keyframes`
    0% {
      transform: translate(0, 0);
    }

    50% {
      transform: translate(0, 149px);
    }

    100% {
      transform: translate(39px, 149px);
    }
`

const rightPartAnimation = keyframes`
    0% {
      transform: translate(0, 0);
    }

    50% {
      transform: translate(0, -151px);
    }

    100% {
      transform: translate(-46px, -151px);
    }
`

const redLineAnimation = keyframes`
    0% {
        opacity: 1;
        height: 1px;
        background-color: #fafd4a;
    }

    50% {
        opacity: 1;
    }

    60% {
        background-color: #ff8100;
    }

    100% {
        opacity: 1;
        background-color: grey;
        height: 86px;
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

const flashIconTranslateAnimation = keyframes`
  0% {
    opacity: 1;
    top: -14px;
  }

  100% {
    opacity: 1;
    top: 72px;
  }
`

const flashIconScaleAnimation = keyframes`
  0% {
    transform: scale(1) ;
  }

  10% {
    transform: scale(0.2) ;
  }
  
  20% {
    transform: scale(1.2) ;
  }

  30% {
    transform: scale(0.3) ;
  }

  40% {
    transform: scale(1) ;
  }

  50% {
    transform: scale(0.3) ;
  } 

  60% {
    transform: scale(1) ;
  }

  80% {
    transform: scale(0.2) ;
  }

  100% {
    transform: scale(1) ;
  }
`

export const Card = styled.div`
    position: relative;

    width: 70px;
    height: 90px;
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: rgb(0 0 0 / 30%) 8px 11px 8px 0px, rgb(0 0 0 / 22%) 0px 15px 12px 0px;

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
        animation: ${textAnimation} 2s cubic-bezier(0.4, 0, 0.2, 1) forwards 2500ms;
    }
`

export const LeftPartCard = styled.div`
    position: absolute;
    z-index: 2;
    left: -40px;
    top: -150px;
    display: flex;
    justify-content: flex-end;

    width: 36px;
    height: 92px;
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

    width: 36px;
    height: 92px;
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
  width: 2px;
  &.guessed {
    animation: ${redLineAnimation} 2s cubic-bezier(0.4, 0, 0.2, 1) forwards 1000ms;
  };
`

export const FlashIcon = styled.img`
  position: absolute;
  left: 27.5%;
  top: -14%;
  z-index: 3;
  opacity: 0;

  &.guessed {
    animation: ${flashIconTranslateAnimation} 2s cubic-bezier(0.4, 0, 0.2, 1) none 1000ms,
    ${flashIconScaleAnimation} 2s linear none 1000ms;
  };
`