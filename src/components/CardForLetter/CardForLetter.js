import { Card, LeftPartCard, RightPartCard, Text, RedLine } from './CardForLetter.styled';
import { useEffect } from "react";

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
        </Card>
    )
}