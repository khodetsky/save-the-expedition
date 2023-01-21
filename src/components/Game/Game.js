import { Battery } from '../Battery/Battery';
import {
    Background, BatteryBox, InfoGameBox, DataGameBox, GoBackBtn, ButtonLink,
    TimerContainer, GoBackBtnArrow, GoBackBtnIcon, Main
} from './Game.styled';
import { DescriptionContainer } from '../DescriptionContainer/DescriptionContainer';
import { RobotMessageContainer } from '../RobotMessageContainer/RobotMessageContainer';
import { ButtonGrid } from '../ButtonGrid/ButtonGrid';
import { GuessedWordContainer } from '../GuessedWordContainer/GuessedWordContainer';
import robotImage from '../../images/robot.png';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GameResultModal } from '../GameResultModal/GameResultModal';
import * as wordsCategories from '../wordsArr';
import svgSprite from '../../images/sprite.svg';
import { PageFooter } from '../../components/PageFooter/PageFooter';
import { Timer } from '../../components/Timer/Timer';
import { addUserPoints, incrementUserGuessedWord } from '../../firebase';
import { useSelector } from "react-redux";
import { getUserPoints, getUserId, getUserCountGuessedWords } from '../../redux/selectors';

export const Game = () => {
    const userPoints = useSelector(getUserPoints);
    const userId = useSelector(getUserId);
    const guessedWords = useSelector(getUserCountGuessedWords);
    const { category } = useParams();

    const [lettersCardArr, setLettersCardArr] = useState([]);
    const [batteryCharge, setBatteryCharge] = useState(5);
    const [guessedWordObject, setGuessedWordObject] = useState({});
    const [robotMessage, setRobotMessage] = useState('Цікаво, що ж це може бути');
    const [guessLetters, setGuessLetters] = useState();
    const [timeLeft, setTimeLeft] = useState(120);
    const [timerIsActive, setTimerIsActive] = useState(true);
    const [gamePoints, setGamePoints] = useState(0);
    const [oldPoints, setOldPoints] = useState(userPoints);
    const [pointsAreThere, setPointsAreThere] = useState(false);
    const [userGuessedWords, setUserGuessedWords] = useState(null);

    useEffect(() => {
        if (userPoints !== null && guessedWords !== null && !pointsAreThere) {
            setOldPoints(userPoints);
            setUserGuessedWords(guessedWords);
            setPointsAreThere(true);
        }
    }, [userPoints, guessedWords, pointsAreThere])

    useEffect(() => {
        const pickWiord = wordsCategories[category][Math.floor(Math.random() * wordsCategories[category].length)];
        setGuessedWordObject(pickWiord);
        setGuessLetters(pickWiord.word.length);
    }, [category]);

    useEffect(() => {
        if (guessLetters === 0 || batteryCharge === 0) {
            setTimerIsActive(false);
        }
        if (guessLetters === 0) {
            const letters = guessedWordObject.word.length;
            const points = calculateGamePoints(letters, batteryCharge, timeLeft);
            setGamePoints(points);
        }
        const interval = setInterval(() => {
            if (timerIsActive) {
                setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [timeLeft, guessLetters, batteryCharge, timerIsActive, guessedWordObject]);


    useEffect(() => {
        if (guessLetters === 0 && gamePoints !== 0 && userId) {
            addUserPoints(userId, oldPoints, gamePoints);
            incrementUserGuessedWord(userId, category, userGuessedWords);
        }
    },
        [userId, oldPoints, gamePoints, guessLetters, category, userGuessedWords]);


    const handleLetterBtnClick = (e) => {
        if (lettersCardArr.length !== 0) {
            const arrOfCards = Array.from(lettersCardArr);
            const guessedCardArr = arrOfCards.filter((card) => card.children[1].innerText === e.currentTarget.innerText);
            changeRobotMessage(guessedCardArr, e.currentTarget.innerText);
            
            if (guessedCardArr.length !== 0) {
                for (let elem of guessedCardArr) {
                    elem.children[0].classList.add('guessed');
                    elem.children[1].classList.add('guessed');
                    elem.children[2].classList.add('guessed');
                    elem.children[0].firstElementChild.classList.add('guessed');
                    elem.children[2].firstElementChild.classList.add('guessed');
                    setGuessLetters((letters) => letters - 1);
                }
            } else {
                setBatteryCharge((charge) => charge - 1)
            }
        }
        e.currentTarget.disabled = true;
    }

    function calculateGamePoints(letters, charge, time) {
        // Math.ceil(5 * 5 * (56 / 10))
        return Math.ceil(letters * charge * (time / 10))
    }

    function takePointsWord(points) {
        const pointsToString = `${points}`;
        const pointsArr = pointsToString.split('');
        let pointsWord;
        switch (pointsArr.length) {
            case 3:
                if ((pointsArr[2] === '2' || pointsArr[2] === '3' || pointsArr[2] === '4' ) && pointsArr[1] !== '1') {
                    pointsWord = 'очка';
                } else if (pointsArr[2] === '1' && pointsArr[1] !== '1') {
                    pointsWord = 'очко';
                } else {
                    pointsWord = 'очків';
                }
                break;
            case 2:
                if ((pointsArr[1] === '2' || pointsArr[1] === '3' || pointsArr[1] === '4') && pointsArr[0] !== '1') {
                    pointsWord = 'очка';
                } else if (pointsArr[1] === '1' && pointsArr[0] !== '1') {
                    pointsWord = 'очко';
                } else {
                    pointsWord = 'очків';
                }
                break;
            case 1:
                if (pointsArr[0] === '2' || pointsArr[0] === '3' || pointsArr[0] === '4') {
                    pointsWord = 'очка';
                } else if (pointsArr[0] === '1' ) {
                    pointsWord = 'очко';
                } else {
                    pointsWord = 'очків';
                }
                break;
            default:
        }
        return pointsWord;
    }

    function changeRobotMessage(arrOfLetters, letter) {
        switch (arrOfLetters.length) {
            case 4:
                setRobotMessage(`Круто, у цьому слові є цілих чотири літери '${letter.toUpperCase()}'!`);
                break;
            case 3:
                setRobotMessage(`Круто, у цьому слові є цілих три літери '${letter.toUpperCase()}'!`);;
                break;
            case 2:
                setRobotMessage(`Круто, у цьому слові є цілих дві літери '${letter.toUpperCase()}'!`);;
                break;
            case 1:
                 setRobotMessage(`Молодець, у цьому слові дійсно є літера '${letter.toUpperCase()}'!`);
                break;
            case 0:
                 setRobotMessage(`Схоже, що у цьому слові немає літери '${letter.toUpperCase()}'!`);
                break;
            default:
        }
    }

    return (
        <>
            <Background>
                {(guessedWordObject.description && guessedWordObject.word) &&
                    (
                    <>
                        <Main>
                            <TimerContainer>
                                <GoBackBtn>
                                    <ButtonLink to='/play'>
                                        <GoBackBtnArrow>
                                            <GoBackBtnIcon href={svgSprite + '#arrow-left'}></GoBackBtnIcon>
                                        </GoBackBtnArrow>
                                        Назад
                                    </ButtonLink>
                                </GoBackBtn>
                                <Timer timeLeftSec={timeLeft}/>
                            </TimerContainer>
                            <InfoGameBox>
                            <DataGameBox>
                                <DescriptionContainer>{guessedWordObject.description}</DescriptionContainer>
                                <RobotMessageContainer message={robotMessage} />
                            </DataGameBox>
                            <BatteryBox>
                                <img src={robotImage} alt="Робот" width={240} height={240} />
                                <Battery batteryCharge={batteryCharge} />
                            </BatteryBox>
                            </InfoGameBox>
                            <GuessedWordContainer setLettersCardArr={setLettersCardArr} guessedWord={guessedWordObject.word} />
                            <ButtonGrid handleBtnClick={handleLetterBtnClick} />
                        </Main> 
                        <PageFooter/>
                    </>
                    )
                }
                {guessLetters === 0 && <GameResultModal animationDelay='5000'>Гарна робота! Ви відгадали слово '{guessedWordObject.word}' і отримуєте за це {gamePoints} {takePointsWord(gamePoints)}!</GameResultModal>}
                {batteryCharge === 0 && <GameResultModal animationDelay='0'>У робота закінчився заряд батареї. Спробуйте відгадати інше слово!</GameResultModal>}
                {timeLeft === 0 && <GameResultModal animationDelay='0'>Ви не відгадали слово за відведений час. Спробуйте відгадати інше слово!</GameResultModal>}
            </Background>
        </>
    )
}