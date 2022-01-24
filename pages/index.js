import React from 'react';
import SignInPage from "./signin";
import {useAuth} from "../util/use-auth";
import CryptoDashboard from "./main/dashboard/crypto"

const homePage = () => {
  const {user} = useAuth();
  console.log('user=====>', user)

  return user ? <CryptoDashboard/> : <SignInPage/>;
}

export default homePage;
