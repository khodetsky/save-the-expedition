import {
    ButtonStyled, UserButtonArrow, UserInfoBox, LinkToProfile,
    MenuExitButton, MenuBackdrop, MenuTriangleBox, UserButtonIcon
} from './UserInfo.styled'
import { useState } from 'react';
import svgSprite from '../../images/sprite.svg'

export const UserInfo = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function handleButtonClick() {
        if (!menuIsOpen) {
            setMenuIsOpen(true);
        } else {
            setMenuIsOpen(false);
        }
    };

    function handleBackdropClick() {
        if (menuIsOpen) {
            setMenuIsOpen(false);
        }
    }

    return (
        <>
            <ButtonStyled type="button" onClick={handleButtonClick}>
                Oleksandr
                <UserButtonArrow>
                    {menuIsOpen ? <UserButtonIcon href={svgSprite + '#errow-up'}></UserButtonIcon>
                    : <UserButtonIcon href={svgSprite + '#errow-down'}></UserButtonIcon>}
                </UserButtonArrow>
            </ButtonStyled>
            {menuIsOpen && (
                <>
                    <MenuTriangleBox width="30" height="20">
                        <polygon points="0,20 15,0 30,20" fill="#FFFFFF" stroke="none" />
                    </MenuTriangleBox>
                    <UserInfoBox>
                        <LinkToProfile to="/profile">Мій профіль</LinkToProfile>
                        <MenuExitButton type="button">Вийти</MenuExitButton >
                    </UserInfoBox>
                    <MenuBackdrop onClick={handleBackdropClick}></MenuBackdrop>
                </>
            )}
        </>
    )
}