import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseConfig = {
    apiKey: "AIzaSyAsGtcjS9HAne_k6xalTThkKjkHBbEIQsU",
    authDomain: "crown-clothing-82f50.firebaseapp.com",
    projectId: "crown-clothing-82f50",
    storageBucket: "crown-clothing-82f50.appspot.com",
    messagingSenderId: "188144360188",
    appId: "1:188144360188:web:86aa7535b07a0cbd4d9579",
    measurementId: "G-10TRJ60MCZ"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
