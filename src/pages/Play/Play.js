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

    const arrOfWords = [
        {
            word: 'кінь',
            description: 'Це їздова тварина, яку з давніх часів люди використовують у господарстві',
        },
        {
            word: 'ведмідь',
            description: 'Всеядний хижак, який розповсюджений майже на всіх континентак Землі. Вони бувають різних видів',
        },
        {
            word: 'оселедець',
            description: 'Представник морської фауни. Частий гість на святкових столах, але у нас його одягають потепліше)',
        },
        {
            word: 'свічка',
            description: 'З відключення світла стала невід\'ємним атрибутом у домівках українців',
        },
        {
            word: 'каяка',
            description: 'Цей плавзасіб використовують при сплавах гірськими річками',
        },
        {
            word: 'сокира',
            description: 'Знаряддя ручної праці людини. В давні часи також використовувсалось як зброя',
        },
        {
            word: 'двигун',
            description: 'Продукт промислової революції. Використовується у багатьох сферахБ також є невід\'ємною частиною автомобілю',
        },
        {
            word: 'рюкзак',
            description: 'Цю річ використовують під різні задачі. Основне призначення це зручне транспортування обмеженого об\'му речей',
        },
        {
            word: 'одяг',
            description: 'Це використовується людиною від самого зародження людства. З тих часів зазнало значних зовнішніх змін. Забезпечує комфорт для людини',
        },
        {
            word: 'гімалаї',
            description: 'Це займає значну частину на суші. Знаходиться у південній Азії і є частиною декількох різних країн. Своїми краєвидами приваблює самих відважних туристів',
        },
    ];

    const pickWiord = arrOfWords[Math.floor(Math.random() * arrOfWords.length)];

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
                        <DescriptionContainer>{pickWiord.description}</DescriptionContainer>
                        <RobotMessageContainer message={robotMessage()} />
                    </DataPlayBox>
                    <BatteryBox>
                        <img src={robotImage} alt="Робот" width={240} height={240} />
                        <Battery batteryCharge={batteryCharge} />
                    </BatteryBox>
                </InfoPlayBox>
                <GuessedWordContainer guessedWord={pickWiord.word} />
                <ButtonGrid batteryCharge={batteryCharge} setBatteryCharge={setBatteryCharge} cardArr={lettersCardArr} />
            </Background>
        </>
    )
}