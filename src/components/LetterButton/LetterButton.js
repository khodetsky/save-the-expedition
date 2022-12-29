import { Button } from './LetterButton.styled';

export const LetterButton = ({ children, cardArr, setBatteryCharge, batteryCharge }) => {

    const handleBtnClick = (e) => {
        if (cardArr.length !== 0) {
            const arrOfCards = Array.from(cardArr);
            const guessedCardArr = arrOfCards.filter((card) => card.children[1].innerText === e.currentTarget.innerText);

            if (guessedCardArr.length !== 0) {
                for (let elem of guessedCardArr) {
                    elem.children[0].classList.add('guessed');
                    elem.children[1].classList.add('guessed');
                    elem.children[2].classList.add('guessed');
                    elem.children[0].firstElementChild.classList.add('guessed');
                    elem.children[2].firstElementChild.classList.add('guessed');
                }
            } else {
                setBatteryCharge(batteryCharge - 1)
            }
        }
        e.currentTarget.disabled = true;
    }

    return (
        <>
            <Button type='button' onClick={handleBtnClick}>{children}</Button>
        </>
    )
}