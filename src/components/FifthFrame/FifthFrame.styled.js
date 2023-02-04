import styled from "styled-components";

import mainImage from '../../images/fifthFrame/base-image.webp';

const cubic = '0,.63,.6,.99';


export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    width: 1280px;
    height: 833px;

    overflow: hidden;
`

export const BaseImage = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    width: 1280px;
    height: 833px;

    background-image: url(${mainImage});
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 240px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    transition: transform 2s cubic-bezier(${cubic});

    will-change: transform;
`

export const Text = styled.p`
    width: 977px;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    text-align: center;
    color: #FFF;

    text-shadow: 20px 15px 9px black;
`

