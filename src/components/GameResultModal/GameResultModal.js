import { Backdrop, ModalStyled, Button, NavButton, BtnContainer, Text, LinkStyled } from './GameResultModal.styled';

export const GameResultModal = ({ children, animationDelay }) => {
    function stopScrolling() {
        document.body.style.overflow = "hidden";
    }

    function startScrolling() {
        document.body.style.overflow = "";
    }

    const clickOnPlayAgainBtn = () => {
        window.location.reload();
    }

    setTimeout(stopScrolling, animationDelay);

    return (
        <Backdrop animationDelay={animationDelay}>
            <ModalStyled animationDelay={animationDelay}>
                <Text>{children}</Text>
                <BtnContainer>
                    <NavButton type='button' onClick={startScrolling}><LinkStyled to="/">Повернутися на головну</LinkStyled></NavButton>
                    <Button type='button' onClick={clickOnPlayAgainBtn}>Зіграти ще раз</Button>
                </BtnContainer>
            </ModalStyled>
        </Backdrop>
    )
}