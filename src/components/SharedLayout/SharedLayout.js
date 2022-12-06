import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

const SharedLayout = () => {
    return (
        <>
        <header>
            <nav>
              <NavLink to="/">Головна</NavLink>
              <NavLink to="/play">Грати</NavLink>
              <NavLink to="/profile">Мій профіль</NavLink>
              <div>
                <NavLink to="/help">Як грати</NavLink>
                <button>Увійти</button>
              </div>
            </nav>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
        </>

    )
}

export default SharedLayout;