import { Battery } from '../../components/Battery/Battery';
import { Background, BatteryBox, InfoPlayBox, DataPlayBox } from './Play.styled';
import { DescriptionContainer } from '../../components/DescriptionContainer/DescriptionContainer';
import { RobotMessageContainer } from '../../components/RobotMessageContainer/RobotMessageContainer';
import { ButtonGrid } from '../../components/ButtonGrid/ButtonGrid';
import { GuessedWordContainer } from '../../components/GuessedWordContainer/GuessedWordContainer';
import robotImage from '../../images/robot.png';
import { useState, useEffect } from "react";


export const Play = () => {
    const [lettersCardArr, setLettersCardArr] = useState([]);
    const [batteryCharge, setBatteryCharge] = useState(5);

    let word = 'таракан';

    function robotMessage() {
        let message = 'Я вірю, що ви зможете це осилити))';
        return message;
    }

    useEffect(() => {
        const arr = document.querySelectorAll('#letterCard');
        setLettersCardArr(arr);
    }, [])

    return (
        <>
            <Background>
                <InfoPlayBox>
                    <DataPlayBox>
                        <DescriptionContainer>Ця істота є одним із символів Мексики. Про цих істот навіть існує популярний мультик</DescriptionContainer>
                        <RobotMessageContainer message={robotMessage()} />
                    </DataPlayBox>
                    <BatteryBox>
                        <img src={robotImage} alt="Робот" width={240} height={240} />
                        <Battery batteryCharge={batteryCharge} />
                    </BatteryBox>
                </InfoPlayBox>
                <GuessedWordContainer guessedWord={word} />
                <ButtonGrid batteryCharge={batteryCharge} setBatteryCharge={setBatteryCharge} cardArr={lettersCardArr} />
            </Background>
        </>
    )
}