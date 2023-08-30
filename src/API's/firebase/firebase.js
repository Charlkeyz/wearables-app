import {initializeApp} from "firebase/app";
import {
    getAuth,
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  getDocs,
  query,
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

  export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    const collectionDocRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionDocRef, object.title.toLowerCase());
      batch.set(docRef, object);
    })
    await batch.commit();
    console.log('done');
  }

  export const getCategoriesAndDocuments = async() => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

     const querySnapShot = await getDocs(q);
     const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
      const {title, items} = docSnapShot.data();
      acc[title.toLowerCase()] = items;
      return acc;
     }, {})

     return categoryMap;
  }

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

  export const signOutUser = async() =>  await signOut(auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
  