import { TimerBox, Text } from './Timer.styled';

export const Timer = ({ timeLeftSec }) => {
    function pad(value) {
        return String(value).padStart(2, '0');
    };

    const minutes = pad(Math.floor(timeLeftSec / 60));
    const seconds = pad(timeLeftSec - minutes * 60);

    return (
        <TimerBox>
            <Text>{minutes}:{seconds}</Text>
        </TimerBox>
    )
}