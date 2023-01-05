import { TimerBox, Text } from './Timer.styled';

export const Timer = ({minutes, seconds}) => {
    return (
        <TimerBox>
            <Text>{minutes}:{seconds}</Text>
        </TimerBox>
    )
}