import styled from "styled-components";

export const Background = styled.div`
    height: 100%;
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
    will-change: transform;
`

export const SectionContainer = styled.div`
    padding-left: 215px;
    padding-right: 215px;
    display: flex;
    flex-direction: column;
    align-items: center;

    color: white;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Text = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.3px;

    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
`

export const SectionTitle = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 36px;
    line-height: 22px;
`

export const SectionSubtitle = styled.h3`
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 28px;
    line-height: 22px;

    margin-top: 30px;
    margin-bottom: 20px;
`

export const ListItem = styled.li`
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.3px;

    margin-top: 15px;
    margin-bottom: 15px;
    text-align: center;
`

export const NavBtnList = styled.ul`
    width: 1280px;
    padding-left: 215px;
    padding-right: 215px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-around;
`

export const RegistrationBtn = styled.button`
    margin-top: 60px;
    width: 270px;
    height: 60px;
    border-radius: 100px;
    border: none;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: #000000;
    background-color: #38bddb;

    cursor: pointer;

    &:hover, &:focus {
        background-color: #29a0bb;
    };
`