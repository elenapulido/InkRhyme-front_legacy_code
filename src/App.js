import React from 'react';
import './Styles/App.css';
import ArticlePage from "./Views/ArticlePage/ArticlePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormPage from './Views/FormPage/FormPage';
import MainPage from './Views/MainPage/MainPage';
import Login from './Views/Login/LoginView';
import Profile from './Views/Profile/ProfileView';
import Register from './Views/Register/RegisterView';

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
    },
  ]);
  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
  );
}
export default App;
