import styled from "styled-components";

import mainImage from '../../images/secondFrame/base-image.webp';
import thirdLayer from '../../images/secondFrame/third-layer.webp';
import secondLayer from '../../images/secondFrame/second-layer.webp';
import firstLayer from '../../images/secondFrame/front-layer.webp';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    width: 1280px;
    height: 1048px;

    overflow: hidden;
`

export const Shedow = styled.div`
    position: absolute;
    z-index: 3;
    left: 0;
    top: -5px;
    width: 1280px;
    height: 50px;
    background-color: black;;
`

export const ShedowBox = styled.div`
    margin-left: auto;
    margin-right: auto;
    position: relative;
    width: 1280px;
    height: 40px;
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
    height: 1048px;

    background-image: url(${mainImage});
    will-change: transform;
`

export const ThirdLayer = styled.div`
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    width: 1280px;
    height: 1048px;

    background-image: url(${thirdLayer});
    will-change: transform;
`

export const SecondLayer = styled.div`
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    width: 1280px;
    height: 1048px;

    background-image: url(${secondLayer});
    will-change: transform;
`

export const FirstLayer = styled.div`
    position: absolute;
    z-index: 4;
    left: 0;
    top: 0;
    width: 1280px;
    height: 1048px;

    background-image: url(${firstLayer});
    will-change: transform;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 280px;
    z-index: 3;
    will-change: transform;
`

export const Text = styled.p`
    width: 1000px;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    color: #FFF;

    text-shadow: 20px 15px 9px black;
`