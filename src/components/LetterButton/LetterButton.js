import { Button } from './LetterButton.styled';

export const LetterButton = ({ children }) => {
    
    const handleBtnClick = (e) => {
        e.currentTarget.disabled = true;
    }

    return (
        <>
            <Button type='button' onClick={handleBtnClick}>{children}</Button>
        </>
    )
}