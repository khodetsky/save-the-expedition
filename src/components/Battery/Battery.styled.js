import styled from "styled-components";

export const BatteryBox = styled.div`
    width: 70px;
    height: 223px;
    border-radius: 30px;
    border: 3px solid black;
    gap: 3px;

    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;

    box-shadow: 4px 4px 15px 4px rgba(0,0,0,0.75);
`

export const BatteryElement = styled.div`
    width: 56px;
    height: 41px;

    background-color: #0ec50e;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: bottom center;
    

    :first-child {
        border-bottom-right-radius: 27px;   
        border-bottom-left-radius: 27px;
    }

    :last-child  {
        border-top-right-radius: 27px;   
        border-top-left-radius: 27px;
    }

    & + .scale {
        transform: scaleY(0);
    }
`