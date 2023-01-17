import {
    Background, Main, ProfileContainer, LeftSideContainer, RightSideContainer, UserLevelBox,
    ImageContainer, Icon, Checkmark, DataPointsContainer, DataText, ProfileName, DataCategoryList,
    ButtonContainer, ButtonContainerText, ComixButton
} from './Profile.styled';
import { PageFooter } from '../../components/PageFooter/PageFooter';
import robotImage from '../../images/robot.png';
import svgSprite from '../../images/sprite.svg';
import { useSelector } from "react-redux";
import { getUserPoints, getUserName, getUserCountGuessedWords } from '../../redux/selectors';
import { useState, useEffect } from "react";
import { UserPointsProgress } from '../../components/UserPointsProgress/UserPointsProgress';



export const Profile = () => {
    const points = useSelector(getUserPoints);
    const name = useSelector(getUserName);
    const guessedWords = useSelector(getUserCountGuessedWords);


    const [userPoints, setUserPoints] = useState(null);
    const [userName, setUserName] = useState(null);
    const [dataAreThere, setDataAreThere] = useState(false);
    const [userLevel, setUserLevel] = useState(1);
    const [userGuessedWords, setUserGuessedWords] = useState(null);

    useEffect(() => {
        if (points !== null && name !== null && guessedWords.animals !== null && !dataAreThere) {
            setUserPoints(points);
            setUserName(name);
            setUserGuessedWords(guessedWords);
            calculateUserLevel(points);
            setDataAreThere(true);
        }
    }, [points, name, guessedWords, dataAreThere]);

    function calculateUserLevel(points) {
        if (points >= 2000 && points < 5000) {
            setUserLevel(2);
        } else if (points >= 5000) {
            setUserLevel(3);
        }
    };

    return (
        <Background>
            <Main>
                <ProfileContainer>
                    {dataAreThere && 
                        <>
                            <LeftSideContainer>
                                <ImageContainer>
                                    <UserLevelBox>{userLevel}</UserLevelBox>
                                <img src={robotImage} alt="Робот" width={240} height={240} />
                                </ImageContainer>
                                <UserPointsProgress points={userPoints} level={userLevel} />
                            </LeftSideContainer>
                            <RightSideContainer>
                                <div>
                                    <ProfileName>{userName}</ProfileName>
                                    <DataPointsContainer>
                                        <DataText>Очки: {userPoints} /5000</DataText>
                                    {userPoints >= 5000 && 
                                        <Icon>
                                            <Checkmark href={svgSprite + '#checkmark'}></Checkmark>
                                        </Icon>
                                    }
                                    </DataPointsContainer>
                                    <div>
                                        <DataText>Відгадано слів у категоріях:</DataText>
                                        <DataCategoryList>
                                            <li>
                                                Тварини: {userGuessedWords.animals} /10
                                                {userGuessedWords.animals >= 10 && 
                                                    <Icon>
                                                        <Checkmark href={svgSprite + '#checkmark'}></Checkmark>
                                                    </Icon>
                                                }
                                            </li>
                                            <li>
                                                Географія: {userGuessedWords.geography} /10
                                                {userGuessedWords.geography >= 10 && 
                                                    <Icon>
                                                        <Checkmark href={svgSprite + '#checkmark'}></Checkmark>
                                                    </Icon>
                                                }
                                            </li>
                                            <li>
                                                Інструменти та пристрої: {userGuessedWords.tools} /10
                                                {userGuessedWords.tools >= 10 && 
                                                    <Icon>
                                                        <Checkmark href={svgSprite + '#checkmark'}></Checkmark>
                                                    </Icon>
                                                }
                                            </li>
                                        </DataCategoryList>
                                    </div>
                                </div>
                                <ButtonContainer>
                                    {(userPoints >= 5000 && userGuessedWords.tools >= 10 && userGuessedWords.geography >= 10 && userGuessedWords.animals >= 10)
                                        ? <ComixButton type='button'>Переглянути комікс</ComixButton>
                                        : <ButtonContainerText>Виконайте всі умови, щоб розблокувати фінал історії</ButtonContainerText>
                                    }
                                </ButtonContainer>
                            </RightSideContainer>
                        </>}
                </ProfileContainer>
            </Main>
            <PageFooter/>
        </Background>
    )
}