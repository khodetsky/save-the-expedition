import { useEffect } from "react";
import { BatteryBox, BatteryElement } from './Battery.styled';

export const Battery = ({batteryCharge}) => {

    useEffect(() => {
        const arr = document.querySelectorAll('#charges');
        switch (batteryCharge) {
            case 4:
                arr[4].classList.add('scale');
                break;
            case 3:
                arr[3].classList.add('scale');
                break;
            case 2:
                arr[2].classList.add('scale');
                break;
            case 1:
                arr[1].classList.add('scale');
                break;
            default:
                arr.forEach(item => { item.classList.toggle('scale') });
        }
    }, [batteryCharge]);

    const batteryElements = () => {
        let array = [];
        for (let i = 0; i < 5; i++) {
            array.push(<BatteryElement key={i} id='charges' />);
        }
        return array;
    }

    return (
        <BatteryBox>
            {batteryElements()}
        </BatteryBox>
    )
}