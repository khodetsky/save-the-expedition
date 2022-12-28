import { Button } from './LetterButton.styled';

export const LetterButton = ({ children }) => {
    
    const handleBtnClick = (e) => {
        e.currentTarget.disabled = true;
        console.log(e.currentTarget.innerText);
    }

    return (
        <>
            <Button type='button' onClick={handleBtnClick}>{children}</Button>
        </>
    )
}