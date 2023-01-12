import {
    ButtonStyled, UserButtonArrow, UserInfoBox, LinkToProfile,
    MenuExitButton, MenuBackdrop, MenuTriangleBox, UserButtonIcon
} from './UserInfo.styled'
import { useState } from 'react';
import svgSprite from '../../images/sprite.svg';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { useSelector, useDispatch } from "react-redux";
import { getUserName } from '../../redux/selectors';
import { setUserId } from '../../redux/userSlice';

export const UserInfo = () => {
    const dispatch = useDispatch();
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const userName = useSelector(getUserName);


    function onExitBtnClick() {
        signOut(auth).then(() => {
            dispatch(setUserId(null))
        }).catch((error) => {
          console.log(error)
        });
    }
    

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
                {userName}
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
                        <MenuExitButton type="button" onClick={onExitBtnClick}>Вийти</MenuExitButton >
                    </UserInfoBox>
                    <MenuBackdrop onClick={handleBackdropClick}></MenuBackdrop>
                </>
            )}
        </>
    )
}