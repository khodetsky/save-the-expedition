import { GlobalStyle } from './GlobalStyles';
import { Routes, Route } from "react-router-dom";
import SharedLayout from './SharedLayout/SharedLayout';
import { Main } from '../pages/Main/Main';
import { Play } from '../pages/Play/Play';
import { Help } from '../pages/Help/Help';
import { Profile } from '../pages/Profile/Profile';
// import { createBrowserRouter } from 'react-router-dom';

export const App = () => {
   return (
     <>
       <GlobalStyle />
       <Routes>
         <Route path="/" element={<SharedLayout />}>
           <Route index element={<Main />} />
           <Route path="play" element={<Play/>} />
           <Route path="help" element={<Help />} />
           <Route path="profile" element={<Profile />} />
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
