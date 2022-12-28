import styled from "styled-components";

export const Background = styled.div`
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    width: 1280px;
    height: 1280px;

    background-color: #4c4f68;
`

export const InfoPlayBox = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    background-color: #4c4f68;

    padding-top: 100px;
    padding-left: 215px;
    padding-right: 215px;
`

export const DataPlayBox = styled.div`
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
    justify-content: space-between;
    align-items: center;
`