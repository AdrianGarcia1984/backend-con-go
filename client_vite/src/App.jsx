import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import AppNotes from './components/pages/AppNotes';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Main from './components/pages/Main';
import RickAndMortyApp from './components/pages/RickAndMortyApp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
   errorElement: <ErrorPage />,
   children:[
    {path:"/",
     element:<Main/>},
     {path:"/portfolio",
     element:<Portfolio/>},
      {path:"/notes",
      element:<AppNotes/>},
      {path:"/contact",
      element:<Contact/>},
      {path:"/RickAndMortyApp",
      element:<RickAndMortyApp/>},
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
