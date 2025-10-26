import { use } from 'react';
import { AuthContext } from './AutProvider';
import { Navigate, useLocation } from 'react-router';
import Loding from '../components/Loding';
const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loding></Loding>;
  }
  //if => user thaka return children
  if (user) {
    return children;
  }
  // navigate --> login
  return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>;
};

export default PrivateRoute;
