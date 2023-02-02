import { GlobalStyle } from './GlobalStyles';
import { Routes, Route } from "react-router-dom";
import SharedLayout from './SharedLayout/SharedLayout';
import ScrollToTop from "./ScrollToTop";
import { Main } from '../pages/Main/Main';
import { Play } from '../pages/Play/Play';
import { Help } from '../pages/Help/Help';
import { Profile } from '../pages/Profile/Profile';
import { Game } from '../components/Game/Game';
import { useEffect, useState } from "react";
import { auth, writeUserGuessedWordsInState, writeUserPointsInState, writeUserNameInState } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from "react-redux";
import { getUserId } from '../redux/selectors';
import { setUserId, setUserName, setUserPoints, setUserGuessedWord } from '../redux/userSlice';


export const App = () => {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);
  const [autorizationModalIsOpen, setAutorizationModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalPosition, setModalPosition] = useState(null);

 
  function openAutorizationModal() {
    setAutorizationModalIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeAutorizationModal() {
    setAutorizationModalIsOpen(false);
    document.body.style.overflow = "";
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUserId(user.uid))
    }
  });

  useEffect(() => {
    if (userId) {
      writeUserNameInState(userId, dispatch, setUserName);
      writeUserPointsInState(userId, dispatch, setUserPoints);
      writeUserGuessedWordsInState(userId, dispatch, setUserGuessedWord);
    } else {
      dispatch(setUserName(null));
    }

    }, [userId, dispatch]);

   return (
     <>
       <GlobalStyle />
       <ScrollToTop>
        <Routes>
           <Route path="/" element={<SharedLayout setModalPosition={setModalPosition} modalPosition={modalPosition} setModalType={setModalType} modalType={modalType} modalIsOpen={autorizationModalIsOpen} openAutorizationModal={openAutorizationModal} closeAutorizationModal={closeAutorizationModal} />}>
            <Route index element={<Main />} />
            <Route path="play" element={<Play />} />
            <Route path="help" element={<Help setModalPosition={setModalPosition} setModalType={setModalType} openAutorizationModal={openAutorizationModal} />} />
            <Route path="profile" element={<Profile />} />
            <Route path="/play/:category" element={<Game />} />
            </Route>
        </Routes>
       </ScrollToTop> 
     </>
   );
 }
   
//  function AppRoutes() {
//     const routes = createBrowserRouter([
//      {
//        path: "/",
//        element: <SharedLayout />,
//        children: [
//          { path: '', element: <Main /> },
//          { path: "play", element: < Play /> },
//          { path: "help", element: < Help /> },
//          { path: "profile", element: <Profile /> },
//        ]
//      },
//     ],
//     {
//       basename: "/To-my-creator",
//     });
//    return routes;
//  }
    

// export const App = () => {
//   return (
//     <>
//       <GlobalStyle />
//       <AppRoutes />
//     </>
//   );
// };
