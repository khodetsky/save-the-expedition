import { ProgressContainer, Progress, ProgressDataContainer, ProgressValueContainer } from './UserPointsProgress.styled';

export const UserPointsProgress = ({ points, level }) => {
    let frames;
    switch (level) {
        case 1:
            frames = 2000;
            break;
        case 2:
            frames = 5000;
            break;
        case 3:
            frames = Infinity;
            break;
        default:
    }

    return (
        <ProgressContainer>
            {frames === Infinity
                ? <>
                    <ProgressValueContainer>
                        <Progress max="100" value={100}></Progress>
                    </ProgressValueContainer >
                    <ProgressDataContainer content={"center"}>
                        <p>{points}</p>
                    </ProgressDataContainer>
                  </>
                : <>
                    <ProgressValueContainer progress={(points * 100) / frames}>
                        <Progress max="100" value={(points * 100) / frames}></Progress>
                    </ProgressValueContainer>
                    <ProgressDataContainer content={"space-between"}>
                        <p>{points}</p>
                        <p>{frames}</p>
                    </ProgressDataContainer>
                  </>
            }
        </ProgressContainer>
    )
}