import styled from "styled-components";

import mainImage from '../../images/firstFrame/base-image.webp';

import midLayer from '../../images/firstFrame/midl-layer.webp';
import firstLayer from '../../images/firstFrame/front-layer.webp';

const cubic = '0,.63,.6,.99';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    width: 1280px;
    height: 1042px;

    overflow: hidden;
`

export const ShedowBox = styled.div`
    margin-left: auto;
    margin-right: auto;
    position: relative;
    width: 1280px;
    height: 40px;
`

export const Shedow = styled.div`
    position: absolute;
    z-index: 3;
    left: 0;
    top: -5px;
    width: 1280px;
    height: 50px;
    background-color: black;
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
    height: 1042px;

    background-image: url(${mainImage});
    transition: transform 2s cubic-bezier(${cubic});
    will-change: transform;
`

export const MidLayer = styled.div`
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    width: 1280px;
    height: 1042px;

    background-image: url(${midLayer});
    transition: transform 2s cubic-bezier(${cubic});

    will-change: transform;
`

export const FirstLayer = styled.div`
    position: absolute;
    z-index: 2;
    width: 1280px;
    height: 1042px;

    background-image: url(${firstLayer});
    transition: transform 2s cubic-bezier(${cubic});

    will-change: transform;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    z-index: 1;
    transition: transform 2s cubic-bezier(${cubic});

    will-change: transform;
`

export const Title = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    color: #FFF;
    text-shadow: 10px 10px 20px black;
`

export const Text = styled.p`
    width: 750px;
    margin-top: 20px;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 32px;
    text-align: center;
    color: #FFF;
    text-shadow: 10px 10px 15px black;
`