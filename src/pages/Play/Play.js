import { Battery } from '../../components/Battery/Battery';
import { Background, BatteryBox, InfoPlayBox, DataPlayBox } from './Play.styled';

export const Play = () => {

    return (
        <>
            <Background>
                <InfoPlayBox>
                    <DataPlayBox>
                    </DataPlayBox>
                    <BatteryBox>
                        <Battery/>
                    </BatteryBox>
                </InfoPlayBox>
            </Background>
        </>
    )
}