import {initializeApp} from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup, 
    GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDpE4mm8bxWzFyY2eWg53udH7Ye-s7Dktw",
    authDomain: "wearables-store-db.firebaseapp.com",
    projectId: "wearables-store-db",
    storageBucket: "wearables-store-db.appspot.com",
    messagingSenderId: "751498543701",
    appId: "1:751498543701:web:ad7fb96dae22b089284adc"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

