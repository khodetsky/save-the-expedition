import { Battery } from '../../components/Battery/Battery';
import { Background, BatteryBox, InfoPlayBox, DataPlayBox } from './Play.styled';
import { DescriptionContainer } from '../../components/DescriptionContainer/DescriptionContainer';
import { RobotMessageContainer } from '../../components/RobotMessageContainer/RobotMessageContainer';
import { ButtonGrid } from '../../components/ButtonGrid/ButtonGrid';
import { GuessedWordContainer } from '../../components/GuessedWordContainer/GuessedWordContainer';
import robotImage from '../../images/robot.png';

export const Play = () => {
    let word = 'барабан';

    function robotMessage() {
        let message = 'fdnvjdnfvo vjnjvnfn njvnfjnfv njvnvf jnfjvn j jfvnj nfv dnvjdnfvo vjnjvnfn njvnfjnfv njvnvf jnfjvn j jfvnj nfv';
        return message;
    }

    return (
        <>
            <Background>
                <InfoPlayBox>
                    <DataPlayBox>
                        <DescriptionContainer>Asrejnekreree Asrejnekrj eduhvuivi ejfo ernf eree Asrejneeree </DescriptionContainer>
                        <RobotMessageContainer message={robotMessage()} />
                    </DataPlayBox>
                    <BatteryBox>
                        <img src={robotImage} alt="Робот" width={240} height={240} />
                        <Battery/>
                    </BatteryBox>
                </InfoPlayBox>
                <GuessedWordContainer guessedWord={word} />
                <ButtonGrid/>
            </Background>
        </>
    )
}