import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage.jsx';
import { useState } from 'react'
import { Header } from './components/Header';
import './App.css'
import { Navigation } from './components/Navigation';
import { MainScreen } from './components/MainScreen';
import { Provider } from 'react-redux';
import AppStore from './utils/appStore';
import { BrowsePage } from './components/BrowsePage';
import { FullBookDetailPage } from './components/FullBookDetailPage';
import { Outlet } from 'react-router-dom';
import { FrontPage } from './components/FrontPage.jsx';
import { AddBook } from './components/AddBook.jsx';
import { CatergoryPage } from './components/CategoryPage.jsx';
const appRouter=createBrowserRouter([
  {path:"/",
    element:<App/>,
    children:[{path:"/",
      element:<FrontPage/>},
      {path:"/browse",
        element:<BrowsePage/>},
        {path:"/addbook",
          element:<AddBook/>},
          {path:"/book/:id",
            element:<FullBookDetailPage/>},
            {
              path:"/book/category/:fr",
              element:<CatergoryPage/>
            }
    ],
    errorElement:<ErrorPage/>
  },
  
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)
