import { ProgressContainer, Progress, ProgressDataContainer, ProgressValueContainer, ProgressText } from './UserPointsProgress.styled';

export const UserPointsProgress = ({ points }) => {
    const targetPoints = 5000;
    const memoryProcents = (points * 100) / targetPoints;

    return (
        <ProgressContainer>
            {points >= targetPoints
                ? <>
                    <ProgressText>Відновлено всю пам'ять</ProgressText>
                    <ProgressValueContainer>
                        <Progress max="100" value={100}></Progress>
                    </ProgressValueContainer >
                    <ProgressDataContainer content={"center"}>
                        <p>{points}</p>
                    </ProgressDataContainer>
                    
                  </>
                : <>
                    <ProgressText>Відновлено {memoryProcents.toFixed(1)}% пам'яті</ProgressText>
                    <ProgressValueContainer progress={memoryProcents}>
                        <Progress max="100" value={memoryProcents}></Progress>
                    </ProgressValueContainer>
                    <ProgressDataContainer content={"space-between"}>
                        <p>{points}</p>
                        <p>{targetPoints}</p>
                    </ProgressDataContainer>
                  </>
            }
        </ProgressContainer>
    )
}