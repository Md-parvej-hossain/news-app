
import { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../provider/AutProvider';

const Home = () => {
  const { user } = use(AuthContext)
  console.log(user);
  return (
   <Navigate to={'/category/1'}></Navigate>
  );
};

export default Home;
