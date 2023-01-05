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

export const Game = () => {
    const [lettersCardArr, setLettersCardArr] = useState([]);
    const [batteryCharge, setBatteryCharge] = useState(5);
    const [guessedWordObject, setGuessedWordObject] = useState({});
    const [robotMessage, setRobotMessage] = useState('Цікаво, що ж це може бути');
    const [guessLetters, setGuessLetters] = useState();
    const { category } = useParams();
    const [timeLeft, setTimeLeft] = useState(120);
    const [timerIsActive, setTimerIsActive] = useState(true);

    const minutes = pad(Math.floor(timeLeft / 60));
    const seconds = pad(timeLeft - minutes * 60);

    useEffect(() => {
        const pickWiord = wordsCategories[category][Math.floor(Math.random() * wordsCategories[category].length)];
        setGuessedWordObject(pickWiord);
        setGuessLetters(pickWiord.word.length);
    }, [category]);

    useEffect(() => {
        if (guessLetters === 0 || batteryCharge === 0) {
            setTimerIsActive(false);
        }
        const interval = setInterval(() => {
            if (timerIsActive) {
                setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [timeLeft, guessLetters, batteryCharge, timerIsActive]);

    function pad(value) {
        return String(value).padStart(2, '0');
    };

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
                                <Timer minutes={minutes} seconds={seconds} />
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
                {guessLetters === 0 && <GameResultModal animationDelay='5000'>Гарна робота! Ви відгадали слово '{guessedWordObject.word}'</GameResultModal>}
                {batteryCharge === 0 && <GameResultModal animationDelay='0'>У робота закінчився заряд батареї. Спробуйте відгадати інше слово!</GameResultModal>}
                {timeLeft === 0 && <GameResultModal animationDelay='0'>Ви не відгадали слово за відведений час. Спробуйте відгадати інше слово!</GameResultModal>}
            </Background>
        </>
    )
}