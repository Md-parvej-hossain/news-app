import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import CatagoreNews from '../pages/CatagoreNews';
import Login from '../components/Login';
import Register from '../components/Register';
import AuthLayout from '../layouts/AuthLayout';

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
        loader: () => fetch('/news.json'),
        element: <CatagoreNews></CatagoreNews>,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login />,
      },
      {
        path: '/auth/register',
        element: <Register />,
      },
    ],
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
