import React from 'react';
import './Styles/App.css';
import ArticlePage from "./Views/ArticlePage/ArticlePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormPage from './Views/FormPage/FormPage';
import MainPage from './Views/MainPage/MainPage';
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
