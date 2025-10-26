import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import CatagoreNews from '../pages/CatagoreNews';
import Login from '../components/Login';
import Register from '../components/Register';
import AuthLayout from '../layouts/AuthLayout';
import NewsDetals from '../pages/NewsDetals';
import PrivateRoute from '../provider/PrivateRoute';
import Loding from '../components/Loding';
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
        hydrateFallbackElement: <Loding></Loding>,
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
    path: '/news-detals/:id',
    loader: () => fetch('/news.json'),
    hydrateFallbackElement: <Loding></Loding>,
    element: (
      <PrivateRoute>
        <NewsDetals></NewsDetals>
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: <h2>Error This Page Go Back</h2>,
  },
]);
