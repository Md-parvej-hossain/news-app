import { Outlet } from 'react-router';
import Navber from '../components/Navber';

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-11/12 mx-auto">
        <Navber></Navber>
      </header>
      <div>
        <main className="w-11/12 mx-auto">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
