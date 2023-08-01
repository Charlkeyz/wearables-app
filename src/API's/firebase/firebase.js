import {initializeApp} from "firebase/app";
import {
    getAuth,
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

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

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) => {
    const userDocRef =  doc(db, "user", userAuth.uid);
    

    const userSnapShot =  await getDoc(userDocRef);

    if(!userSnapShot.exists()) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();


      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,

        });
      } catch (error){
        console.log("error message", error)
      }
    }
    return userDocRef;
  }
  export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
    
  }
  export const signInAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  }

