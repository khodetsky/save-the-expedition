import { LetterButton } from '../LetterButton/LetterButton';
import { ButtonGridList } from './ButtonGrid.styled';

export const ButtonGrid = ({handleBtnClick}) => {
    const alphabet = ['а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я'];

    return (
        <ButtonGridList>
            {alphabet.map(letter => (
                <li key={letter}>
                    <LetterButton handleBtnClick={handleBtnClick}>{letter}</LetterButton>
                </li>
            ))}
        </ButtonGridList>
    )
}