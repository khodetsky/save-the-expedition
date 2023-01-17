import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { UserInfo } from '../UserInfo/UserInfo';
import { useState } from 'react';
import {AutorizationModal} from '../AutorizationModal/AytorizationModal'
import {
  HeaderContainer, HeaderLeft, Header, NavLinkStyled,
  NavLinkRight, SignUpButton, HeaderRightBox
} from './SharedLayout.styled';
import { useSelector } from "react-redux";
import { getUserName } from '../../redux/selectors';



const SharedLayout = () => {
  const [autorizationModalIsOpen, setAutorizationModalIsOpen] = useState(false);
  const userName = useSelector(getUserName);

 
  function openAutorizationModal() {
    setAutorizationModalIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeAutorizationModal() {
    setAutorizationModalIsOpen(false);
    document.body.style.overflow = "";
  }

    return (
        <>
        <Header>
          <HeaderContainer>
            <HeaderLeft>
              <h2>ToCreator</h2>
              <nav>
                <NavLinkStyled to="/">Головна</NavLinkStyled>
                <NavLinkStyled to="/play">Грати</NavLinkStyled>
              </nav>
            </HeaderLeft>
            <HeaderRightBox>
              <NavLinkRight to="/help">Як грати</NavLinkRight>
              {userName ? <UserInfo name={userName}/> : <SignUpButton type="button" onClick={openAutorizationModal}>Увійти</SignUpButton>}
              {/* <UserInfo name={userName}/> */}
            </HeaderRightBox>  
          </HeaderContainer>
          {autorizationModalIsOpen && (<AutorizationModal closeModal={closeAutorizationModal} />)}
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
        </>

    )
}

export default SharedLayout;