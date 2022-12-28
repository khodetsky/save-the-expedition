import { CardForLetter } from '../../components/CardForLetter/CardForLetter';
import { LettersList } from './GuessedWordContainer.styled';

export const GuessedWordContainer = ({guessedWord}) => {
    let lettersArr = guessedWord.split('');

    return (
        <LettersList>
            {lettersArr.map((letter, index) => (
                <li key={index}>
                    <CardForLetter letter={letter} />
                </li>
            ))}
        </LettersList>
    )
}