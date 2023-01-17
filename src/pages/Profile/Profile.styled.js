import styled  from "styled-components";

export const Background = styled.div`
    min-height: 100vh;
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
`

export const ProfileContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 140px;
    padding-top: 100px;
    width: 750px;
    height: 500px;
    background-color: #47484e;

    display: flex;
    // align-items: center;
    justify-content: space-around;

    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px 0px, rgba(0, 0, 0, 0.22) 0px 15px 12px 0px;
`

export const LeftSideContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 300px;
`

export const RightSideContainer = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: center;

    width: 320px;
    color: #7a7a87;
`

export const UserLevelBox = styled.div`
    position: absolute;
    top: -20px;
    left: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: black;
    background-color: yellow;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 22px;

    width: 40px;
    height: 40px;
    border: 2px solid black;
    border-radius: 100%;
`

export const ImageContainer = styled.div`
    background-color: #7a7a87;

    padding-top: 20px;
    position: relative;
    border: 3px solid black;
    border-radius: 25px;
`

export const Icon = styled.svg`
    margin-left: 10px;
    width: 15px;
    height: 15px;
`

export const Checkmark = styled('use')`
    stroke: none;
    fill: green;
    width: 15px;
    height: 15px;
`

export const DataPointsContainer = styled.div`
    display: flex;
`

export const DataText = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: normal;
    font-size: 20px;
    line-height: 22px;

    margin-bottom: 5px;
`

export const ProfileName = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-weight: normal;
    font-size: 28px;
    line-height: 22px;

    margin-bottom: 15px;
`

export const DataCategoryList = styled.ul`
    font-family: 'Raleway', sans-serif;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;

    margin-left: 10px;
`

export const ButtonContainer = styled.div`
    margin-top: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ButtonContainerText = styled.div`
    font-family: 'Raleway', sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
`

export const ComixButton = styled.button`
    padding: 10px 25px;
    border-radius: 25px;
    margin-bottom: 5px;
    border: none;
    cursor: pointer;

    font-family: 'Raleway', sans-serif;
    font-weight: normal;
    font-size: 20px;
    line-height: 22px;

    background-color: #E93A7D;
    color: #FFFFFF;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        color: black;
    }
`