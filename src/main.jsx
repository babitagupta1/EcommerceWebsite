import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Contect from './components/Contect.jsx'; 
import Product from './components/Product.jsx';


 export const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Hero />,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/Contact",
        element:<Contect />
      },
      {
        path:"/product/:id",
        element:<Product />,
      },
    ],
  },
 ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
