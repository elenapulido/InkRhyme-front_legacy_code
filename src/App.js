import React from 'react';
import './Styles/App.css';
import ArticlePage from "./Views/ArticlePage/ArticlePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormPage from './Views/FormPage/FormPage';
import MainPage from './Views/MainPage/MainPage';
import Login from './Views/Login/LoginView';
import Profile from './Views/Profile/ProfileView';
import Register from './Views/Register/RegisterView';
import BoardUser from './Views/BoardUser/BoardUser';
import BoardModerator from './Views/BoardModerator/BoardModerator';
import BoardAdmin from './Views/BoardAdmin/BoardAdmin';
import SearchPage from './Views/SearchPage/SearchPage';


const App = () => {
  const router = createBrowserRouter([{
    path: "/",
    element: <MainPage />
  }, {
      path: "/Form",
      element: <FormPage />
    },{
      path: "/Article",
      element: <ArticlePage />
    },{
      path: "/Login",
      element: <Login />
    },{
      path: "/Profile",
      element: <Profile />
    },{
      path: "/Register",
      element: <Register />
    },{
      path: "/user",
      element: <BoardUser />
    },{
      path: "/mod",
      element: <BoardModerator />
    },{
      path: "/admin",
      element: <BoardAdmin />
    },{
      path: "/Search",
      element: <SearchPage />
    },
  ]);
  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
  );
}

export default App;
