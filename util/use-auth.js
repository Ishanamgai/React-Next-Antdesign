// import { response } from "express";
import React, {useState, useEffect, useContext, createContext} from "react";
import {
  auth,
  facebookAuthProvider,
  githubAuthProvider,
  googleAuthProvider,
  twitterAuthProvider
} from "../firebaseConfig/index";

const authContext = createContext();


// Provider component that wraps your app and makes auth object ..
// ... available to any child component that calls useAuth().

export function ProvideAuth({children}) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.

export const useAuth = () => {
  return useContext(authContext);
};


// Provider hook that creates auth object and handles state

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [isLoadingUser, setLoadingUser] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchStart = () => {
    setLoading(true);
    setError('');
  }

  const fetchSuccess = () => {
    setLoading(false);
    setError('');
  }

  const fetchError = (error) => {
    setLoading(false);
    setError(error.message);
  }

  // Django jangoSignUp new user

  const jangoSignUp = details => {
    (async ()=> {
      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: details.username, password: details.password, email: details.email})
      })
      const userSignedUp = await response.json(); 

      console.log("========>", userSignedUp)

    })();
    
  }

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.

  const loginWithSocial = (platform, callbackFun) => {
    let authProvider = googleAuthProvider;
    if (platform === 'facebook') {
      authProvider = facebookAuthProvider;
    }

    if (platform === 'github') {
      authProvider = githubAuthProvider;
    }

    if (platform === 'twitter') {
      authProvider = twitterAuthProvider;
    }

    try {
      fetchStart();
      return auth.signInWithPopup(authProvider)
        .then(response => {
          fetchSuccess();
          setUser(response.user);
          if (callbackFun) callbackFun();
          return response.user;
        }).catch(error => {
          fetchError(error);
        });
    } catch (error) {
      fetchError(error);
    }
  }

  const login = (email, password, callbackFun) => {
    try {
      fetchStart();
      return auth.signInWithEmailAndPassword(email, password)
        .then(response => {
          fetchSuccess();
          setUser(response.user);
          if (callbackFun) callbackFun();
          return response.user;
        }).catch(error => {
          fetchError(error);
        });
    } catch (error) {
      fetchError(error);
    }
  };

  // Django server loging

  const jangoLogin = ( details) =>{
    (async ()=> {
      try {
         const response = await fetch('http://127.0.0.1:8000/api/login/', 
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({username: details.email, password: details.password})
        })
        const json = await response.json()
        const dataTostore = JSON.stringify(json)
        if(response.ok){
          setUser(json)
          localStorage.setItem('userData', dataTostore)
          console.log('=======.', user)
        }else{
          throw new Error("server responce wasn\'t ok")
        }
      } catch (error) {
        console.log(Error);
      }
    })()
      
  }

  const signup = (email, password, callbackFun) => {
    try {
      fetchStart();
      return auth.createUserWithEmailAndPassword(email, password)
        .then(response => {
          fetchSuccess();
          setUser(response.user);
          if (callbackFun) callbackFun();
          return response.user;
        }).catch(error => {
          fetchError(error);
        });
    } catch (error) {
      fetchError(error);
    }
  };

  const signOut = () => {
    // const userData = localStorage.getItem('userData')
    return auth.signOut()
      .then(() => {
        setUser(false);
        // userData(false);
      });
  };

  const sendPasswordResetEmail = (email, callbackFun) => {
    try {
      fetchStart();
      return auth.sendPasswordResetEmail(email)
        .then(() => {
          fetchSuccess();
          if (callbackFun) callbackFun();
          return true;
        }).catch(error => {
          fetchError(error);
        });
    } catch (error) {
      fetchError(error);
    }
  };

  const confirmPasswordReset = (code, password, callbackFun) => {
    try {
      fetchStart();
      return auth.confirmPasswordReset(code, password)
        .then(() => {
          fetchSuccess();
          if (callbackFun) callbackFun();
          return true;
        }).catch(error => {
          fetchError(error);
        });
    } catch (error) {
      fetchError(error);
    }
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
     const userData = localStorage.getItem('userData')
      console.log("=====> localStorage", localStorage);
      if (user) {
        setUser(user);
      } else {
        setUser(false);
        // setUser(user);
      }
      setLoadingUser(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    isLoadingUser,
    isLoading,
    user,
    error,
    login,
    signup,
    signOut,
    sendPasswordResetEmail,
    confirmPasswordReset,
    loginWithSocial, 
    jangoLogin, 
    jangoSignUp,
  };
}

export const isUnRestrictedRoute = (pathname) => {
  return pathname === '/signin' || pathname === '/signup'
}
