import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/fairbase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AutProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(loading, user);
  const provider = new GoogleAuthProvider();
  const passwordAuthintication = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginAuthintication = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const upadatProfile = ( updateData ) => {
    return updateProfile(auth.currentUser, updateData);
  };

  const handelSinOut = () => {
    return signOut(auth);
  };

  const authData = {
    user,
    setUser,
    passwordAuthintication,
    loginAuthintication,
    googleLogin,
    handelSinOut,
    loading,
    setLoading,
    upadatProfile,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AutProvider;
