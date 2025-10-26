import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { createContext, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/fairbase.config';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const AutProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const provider = new GoogleAuthProvider();
  const passwordAuthintication = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then(resuld =>
      setUser(resuld)
    );
  };
  const loginAuthintication = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then(res => {
      setUser(res);
    });
  };
  const googleLogin = () => {
    signInWithPopup(auth, provider).then(result => {
      const user = result.user;
      setUser(user);
      
    });
  };
  const authData = {
    user,
    setUser,
    passwordAuthintication,
    loginAuthintication,
    googleLogin,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AutProvider;
