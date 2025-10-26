import { Link } from 'react-router';
import users from '../assets/user.png';
import { useContext } from 'react';
import { AuthContext } from '../provider/AutProvider';

const Navber = () => {
  const { user, handelSinOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <Link to={'/category/1'}>Home</Link>
      </li>

      <li>
        <a>About</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div className="navbar  ">
      <p>{user && user?.email}</p>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user?.photoURL ? (
          <img src={user?.photoURL} alt="pro" className='w-14 h-14 object-cover rounded-full mx-2 ' />
        ) : (
          <img src={users} alt="pro" className="px-5 " />
        )}

        {user ? (
          <button
            onClick={handelSinOut}
            className="btn bg-primary text-base-100 "
          >
            Logout
          </button>
        ) : (
          <Link to={'/auth/login'} className="btn bg-primary text-base-100 ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
