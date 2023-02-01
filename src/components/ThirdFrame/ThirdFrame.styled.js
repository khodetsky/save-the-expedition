import styled from "styled-components";

import mainImage from '../../images/thirdFrame/base-image.webp';
import firstLayer from '../../images/thirdFrame/front-layer.png';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    will-change: transform;
`

export const FirstLayer = styled.div`
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    width: 1280px;
    height: 1042px;

    background-image: url(${firstLayer});
    will-change: transform;
`

export const TextContainer = styled.div`
    display: flex;
    width: 1150px;
    flex-direction: column;
    align-items: end;
    margin-top: 250px;
    z-index: 1;
    will-change: transform;
`

export const Text = styled.p`
    width: 650px;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    text-align: end;
    color: #FFF;

    text-shadow: 20px 15px 15px black;
`