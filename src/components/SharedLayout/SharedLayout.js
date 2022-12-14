import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import {UserInfo} from '../UserInfo/UserInfo'
import { HeaderContainer, HeaderLeft, Header, NavLinkStyled, NavLinkRight, SignUpButton, } from './SharedLayout.styled';

const SharedLayout = () => {
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
            <div>
              <NavLinkRight to="/help">Як грати</NavLinkRight>
              <SignUpButton type="button">Увійти</SignUpButton>
              <UserInfo/>
            </div>  
          </HeaderContainer>
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
        </>

    )
}

export default SharedLayout;