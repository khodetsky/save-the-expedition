import { Battery } from '../../components/Battery/Battery';
import { Background, BatteryBox, InfoPlayBox, DataPlayBox } from './Play.styled';
import { DescriptionContainer } from '../../components/DescriptionContainer/DescriptionContainer';
import { RobotMessageContainer } from '../../components/RobotMessageContainer/RobotMessageContainer';
import { ButtonGrid } from '../../components/ButtonGrid/ButtonGrid';
import { GuessedWordContainer } from '../../components/GuessedWordContainer/GuessedWordContainer';
import robotImage from '../../images/robot.png';
import { useState, useEffect } from "react";
import { arrOfWords } from '../../components/wordsArr';

export const Play = () => {
    const [lettersCardArr, setLettersCardArr] = useState([]);
    const [batteryCharge, setBatteryCharge] = useState(5);
    const [guessedWordObject, setGuessedWordObject] = useState({});
    const [robotMessage, setRobotMessage] = useState('Цікаво, що ж це може бути');

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
                }
            } else {
                setBatteryCharge(batteryCharge - 1)
            }
        }
        e.currentTarget.disabled = true;
    }

    

    function changeRobotMessage(arrOfLetters, letter) {
        switch (arrOfLetters.length) {
            case 4:
                setRobotMessage(`Круто, у цьому слові є цілих чотири букви '${letter.toUpperCase()}'!`);
                break;
            case 3:
                setRobotMessage(`Круто, у цьому слові є цілих три букви '${letter.toUpperCase()}'!`);;
                break;
            case 2:
                setRobotMessage(`Круто, у цьому слові є цілих дві букви '${letter.toUpperCase()}'!`);;
                break;
            case 1:
                 setRobotMessage(`Молодець, у цьому слові дійсно є буква '${letter.toUpperCase()}'!`);
                break;
            case 0:
                 setRobotMessage(`Шкода, але у цьому слові немає букви '${letter.toUpperCase()}'!`);
                break;
            default:
        }
    }

    useEffect(() => {
        const pickWiord = arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
        setGuessedWordObject(pickWiord);
    }, [])

    return (
        <>
            <Background>
                {(guessedWordObject.description && guessedWordObject.word) &&
                    (
                        <>
                            <InfoPlayBox>
                            <DataPlayBox>
                                <DescriptionContainer>{guessedWordObject.description}</DescriptionContainer>
                                <RobotMessageContainer message={robotMessage} />
                            </DataPlayBox>
                            <BatteryBox>
                                <img src={robotImage} alt="Робот" width={240} height={240} />
                                <Battery batteryCharge={batteryCharge} />
                            </BatteryBox>
                            </InfoPlayBox>
                            <GuessedWordContainer setLettersCardArr={setLettersCardArr} guessedWord={guessedWordObject.word} />
                            <ButtonGrid handleBtnClick={handleLetterBtnClick} />
                        </> 
                    )
                }
            </Background>
        </>
    )
}