import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDPgxWPYx_vjgphSTcWmBxvTBRtSUBmFHc",
  authDomain: "crypseycom.firebaseapp.com",
  projectId: "crypseycom",
  storageBucket: "crypseycom.appspot.com",
  messagingSenderId: "771427718659",
  appId: "1:771427718659:web:54b44352c9c020be0de036",
  measurementId: "G-D0XFGW970C"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();

export {
  database,
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider
};
