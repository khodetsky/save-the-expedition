import { GlobalStyle } from './GlobalStyles';
import { Routes, Route } from "react-router-dom";
import SharedLayout from './SharedLayout/SharedLayout';
import { Main } from '../pages/Main/Main';
import { Play } from '../pages/Play/Play';
import { Help } from '../pages/Help/Help';
import { Profile } from '../pages/Profile/Profile';
import { Game } from '../components/Game/Game';
// import { createBrowserRouter } from 'react-router-dom';
import { useEffect } from "react";
import { auth, writeUserGuessedWordsInState, writeUserPointsInState, writeUserNameInState } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from "react-redux";
import { getUserId } from '../redux/selectors';
import { setUserId, setUserName, setUserPoints, setUserGuessedWord } from '../redux/userSlice';


export const App = () => {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUserId(user.uid))
    } else {
      console.log('user not found')
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
       <Routes>
         <Route path="/" element={<SharedLayout />}>
           <Route index element={<Main />} />
           <Route path="play" element={<Play />} />
           <Route path="help" element={<Help />} />
           <Route path="profile" element={<Profile />} />
           <Route path="/play/:category" element={<Game />} />
         </Route>
       </Routes>
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
