import { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AutProvider';
import { useRef } from 'react';

const Login = () => {
  const { loginAuthintication, forgetPassword } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRaf = useRef();

  const handaleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginAuthintication(email, password)
      .then(resuld => {
        //varifi email
        if (!resuld.user.emailVerified) {
          return alert('Please verify your email before login');
        } else {
          navigate(`${location.state ? location.state : '/'}`);
        }
        
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handelForgtpassword = () => {
    const email = emailRaf.current.value;
    forgetPassword(email);
  };

  return (
    <div className="flex min-h-[calc(100vh-200px)] justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4">
        <h2 className="text-center text-2xl ">Login your account</h2>
        <form onSubmit={handaleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email address</label>
            <input
              type="email"
              name="email"
              ref={emailRaf}
              className="input"
              placeholder="Enter your email address"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter your password"
            />
            <div>
              <a onClick={handelForgtpassword} className="link link-hover">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="text-center py-4">
              Dont’t Have An Account ?{' '}
              <Link
                className="text-secondary hover:underline"
                to={'/auth/register'}
              >
                Register
              </Link>{' '}
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
