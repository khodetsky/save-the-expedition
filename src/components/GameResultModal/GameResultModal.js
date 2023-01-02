import { Backdrop, ModalStyled, Button, NavButton, BtnContainer, Text, LinkStyled } from './GameResultModal.styled';

export const GameResultModal = ({ children, animationDelay }) => {
    const clickOnPlayAgainBtn = () => {
        window.location.reload();
    }

    return (
        <Backdrop animationDelay={animationDelay}>
            <ModalStyled animationDelay={animationDelay}>
                <Text>{children}</Text>
                <BtnContainer>
                    <NavButton type='button'><LinkStyled to="/">Повернутися на головну</LinkStyled></NavButton>
                    <Button type='button' onClick={clickOnPlayAgainBtn}>Зіграти ще раз</Button>
                </BtnContainer>
            </ModalStyled>
        </Backdrop>
    )
}