import { ButtonStyled, UserButtonArrow, UserInfoBox, LinkToProfile, MenuExitButton, MenuBackdrop, ButtonOpenMenu } from './UserInfo.styled'
import { useState, useEffect } from 'react';

export const UserInfo = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [backdropIsOpen, setBackdropIsOpen] = useState(false);

    function handleButtonClick() {
        if (!menuIsOpen) {
            setMenuIsOpen(true);
            setBackdropIsOpen(true);
        } else {
            setMenuIsOpen(false);
        setBackdropIsOpen(false);
        }
    };

    function handleBackdropClick() {
        if (menuIsOpen) {
            setMenuIsOpen(false);
            setBackdropIsOpen(false);
        }
    }

    return (
        <>
            <ButtonStyled type="button" onClick={handleButtonClick}>
                Oleksandr
                <UserButtonArrow>
                    <use href=""></use>
                </UserButtonArrow>
            </ButtonStyled>
            {menuIsOpen && (
                <>
                    <UserInfoBox>
                        <ButtonOpenMenu type="button" onClick={handleButtonClick}>
                            Oleksandr
                            <UserButtonArrow>
                                <use href=""></use>
                            </UserButtonArrow>
                        </ButtonOpenMenu>
                        <LinkToProfile to="/profile">Мій профіль</LinkToProfile>
                        <MenuExitButton type="button">Вийти</MenuExitButton >
                    </UserInfoBox>
                    <MenuBackdrop onClick={handleBackdropClick}></MenuBackdrop>
                </>
            )}
        </>
    )
}