import styled from "styled-components";

export const AutorBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    z-index: 4;

    padding: 20px;

    background-color: rgba(0, 0, 0, 0.2);

    opacity: 1;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: scroll;
`

export const AutorModalStyled = styled.div`
    padding: 40px 20px 20px 20px;
    background-color: #FFFFFF;
    border-radius: 8px;
    width: auto;
    height: auto;

    display: flex;
    align-items: center;
    flex-direction: column;

    z-index: 5;
    position: absolute;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);

    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px 0px, rgba(0, 0, 0, 0.22) 0px 15px 12px 0px;
`

export const AutorModalCloseBtn = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;

    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    border: none;

    cursor: pointer;

    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const AutorModalCloseBtnSymbol = styled('use')`
    position: absolute;
    fill: #475467;
    stroke: none;

    :hover, :focus {
        fill: #7B61FF;
    };
`

export const AutorModalCloseBtnIcon = styled.svg`
    height: 18px;
`