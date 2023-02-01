import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";
import { UserInfo } from '../UserInfo/UserInfo';
import {AutorizationModal} from '../AutorizationModal/AytorizationModal'
import {
  HeaderContainer, HeaderLeft, Header, NavLinkStyled,
  NavLinkRight, SignUpButton, HeaderRightBox
} from './SharedLayout.styled';
import { useSelector } from "react-redux";
import { getUserName } from '../../redux/selectors';
import logoIcon from '../../images/logo.svg';

const SharedLayout = ({setModalPosition, modalPosition, setModalType, modalType, modalIsOpen, openAutorizationModal, closeAutorizationModal}) => {
  const userName = useSelector(getUserName);

  function openAuthModal() {
    setModalPosition(window.scrollY);
    setModalType('signIn');
    openAutorizationModal();
  }

    return (
        <>
        <Header>
          <HeaderContainer>
            <HeaderLeft>
              <Link to={"/"} style={{cursor: "pointer"}}><img src={logoIcon} alt='логотип' width={200} /></Link>
              <nav>
                <NavLinkStyled to="/">Головна</NavLinkStyled>
                <NavLinkStyled to="/play">Грати</NavLinkStyled>
              </nav>
            </HeaderLeft>
            <HeaderRightBox>
              <NavLinkRight to="/help">Як грати</NavLinkRight>
              {userName ? <UserInfo /> : <SignUpButton type="button" onClick={openAuthModal}>Увійти</SignUpButton>}
              {/* <UserInfo /> */}
            </HeaderRightBox>  
          </HeaderContainer>
          {modalIsOpen && (<AutorizationModal modalPosition={modalPosition} setModalType={setModalType} modalType={modalType} closeModal={closeAutorizationModal} />)}
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
        </>

    )
}

export default SharedLayout;