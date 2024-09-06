import { createBrowserRouter, Outlet } from 'react-router-dom';
import './App.css';
import Allcourse from './component/Allcourse';
import Backbtn from './component/Backbtn';
import Home from './component/Home';
import Login from './component/Login';
import Mycourse from './component/Mycourse';
import Preview from './component/Preview';
import Profile from './component/Profile';
import Signup from './component/Signup';
import Vidcontent from './component/Vidcontent';






const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/team",
        element: <Login />,
      
      },
      {
        path: "/",
        element: <Signup />,
      
      },
      
      {
        path: "/home",
        element: <Home />,
      
      },
      {
        path: "/Preview",
        element: <Preview />,
      
      },
      {
        path: "/Vidcontent",
        element: <Vidcontent/>,
      
      },
      {
        path: "/Allcourse",
        element: <Allcourse/>,
      
      },
      {
        path: "/Mycourse",
        element: <Mycourse/>,
      
      },
      {
        path: "/Profile",
        element: <Profile/>,
      
      },
      {
        path: "/Backbtn",
        element: <Backbtn/>,
      
      },
    ],
  },
  ]);

function App() {

  return (
    <>
      <Outlet />
    </>
  );
}

export default router;
