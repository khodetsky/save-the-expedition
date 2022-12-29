import { Button } from './LetterButton.styled';

export const LetterButton = ({ children, handleBtnClick }) => {

    return (
        <>
            <Button type='button' onClick={handleBtnClick}>{children}</Button>
        </>
    )
}