import { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AutProvider';
const Register = () => {
  const { passwordAuthintication, upadatProfile, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const handaleRegister = e => {
    e.preventDefault();
    const userName = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const user = { userName, photoURL, email, password };
    passwordAuthintication(email, password)
      .then(res => {
        const user = res.user;
        upadatProfile({ displayName: userName, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: userName, photoURL: photoURL });
          })
          .catch(error => {
            console.log(error);
            setUser(user);
          });
        navigate('/category/1');
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="flex min-h-[calc(100vh-100px)] justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4">
        <h2 className="text-center text-2xl ">Register your account</h2>
        <form onSubmit={handaleRegister} className="card-body ">
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input
              type="name"
              name="name"
              className="input"
              placeholder="Enter your Name"
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              className="input"
              placeholder="Enter your url"
            />
            <label className="label">Email address</label>
            <input
              type="email"
              name="email"
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
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="text-center py-4">
              Allready Have An Account ?{' '}
              <Link
                className="text-secondary hover:underline"
                to={'/auth/login'}
              >
                Login
              </Link>{' '}
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
