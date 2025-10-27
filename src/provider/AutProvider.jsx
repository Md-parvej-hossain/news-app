import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
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

  //forget password
 const forgetPassword = (email) => {
    //  const email = emailRaf.current.value;
     sendPasswordResetEmail(auth, email)
       .then(() => {
         alert('Password resade email send Plese check your Email ');
       })
       .catch(error => {
         const errorMessage = error.message;
         console.log(errorMessage);
       });
  };    
  

  //user varefication 
  const userVareficationEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert('Verification email sent');
    });
  }

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
    forgetPassword,
    userVareficationEmail,
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
