import { ButtonStyled, UserButtonArrow, UserInfoBox, LinkToProfile, MenuExitButton } from './UserInfo.styled'

export const UserInfo = () => {
    function handleButtonClick() {

    }

    return (
        <>
            <ButtonStyled type="button" onClick={handleButtonClick}>
                Name
                <UserButtonArrow>
                    <use href=""></use>
                </UserButtonArrow>
            </ButtonStyled>
            <UserInfoBox>
                <LinkToProfile to="/profile">Мій профіль</LinkToProfile>
                <MenuExitButton type="button">Вийти</MenuExitButton >
            </UserInfoBox>
        </>
    )
}