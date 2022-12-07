import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { HeaderContainer, HeaderLeft, Header } from './SharedLayout.styled';

const SharedLayout = () => {
    return (
        <>
        <Header>
          <HeaderContainer>
            <HeaderLeft>
              <h2>ToCreator</h2>
              <nav>
                <NavLink to="/">Головна</NavLink>
                <NavLink to="/play">Грати</NavLink>
                <NavLink to="/profile">Мій профіль</NavLink>
              </nav>
            </HeaderLeft>
            <div>
              <NavLink to="/help">Як грати</NavLink>
              <button>Увійти</button>
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