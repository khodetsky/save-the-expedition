import { CardForLetter } from '../../components/CardForLetter/CardForLetter';
import { LettersList } from './GuessedWordContainer.styled';

export const GuessedWordContainer = ({ guessedWord, setLettersCardArr }) => {
    let lettersArr = guessedWord.split('');

    return (
        <>
            {guessedWord && <LettersList>
                { lettersArr.map((letter, index) => (
                    <li key={index}>
                        <CardForLetter letter={letter} setLettersCardArr={setLettersCardArr} />
                    </li>
                ))}
            </LettersList>}
        </>
        
    )
}