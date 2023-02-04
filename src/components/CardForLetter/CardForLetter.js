import { Card, LeftPartCard, RightPartCard, Text, RedLine, FlashIcon } from './CardForLetter.styled';
import { useEffect } from "react";
import flashIcon from '../../images/blink-flash.svg';

export const CardForLetter = ({ letter, setLettersCardArr }) => {

    useEffect(() => {
        const arr = document.querySelectorAll('#letterCard');
        setLettersCardArr(arr)
    }, [setLettersCardArr]);
    
    return (
        <Card id='letterCard'>
            <LeftPartCard>
                <RedLine/>
            </LeftPartCard>
            <Text>{letter}</Text>
            <RightPartCard>
                <RedLine/>
            </RightPartCard>
            <FlashIcon src={flashIcon} alt='іконка спалаху' width={30} />
        </Card>
    )
}