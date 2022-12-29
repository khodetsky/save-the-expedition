import { Card, LeftPartCard, RightPartCard, Text, RedLine } from './CardForLetter.styled';

export const CardForLetter = ({ letter }) => {
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