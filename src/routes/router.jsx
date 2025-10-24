import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import CatagoreNews from '../pages/CatagoreNews';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/category/:id',
        loader:()=>fetch('/news.json'),
        element: <CatagoreNews></CatagoreNews>,
      },
    ],
  },
  {
    path: '/auth',
    element: <div>Authintication layout</div>,
  },
  {
    path: '/news',
    element: <div>This is a News Layput</div>,
  },
  {
    path: '*',
    element: <h2>Error This Page Go Back</h2>,
  },
]);
