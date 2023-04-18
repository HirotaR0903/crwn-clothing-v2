import { initializeApp } from 'firebase/app'
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

    import {
        getFirestore,
        doc,
        getDoc,
        setDoc,
    } from 'firebase/firestore'




const firebaseConfig = {
    apiKey: "AIzaSyDbhCSaT1LNDm1daFRNmSz9wEQNmJSEItc",
    authDomain: "crwn-clothing-db-93e0a.firebaseapp.com",
    projectId: "crwn-clothing-db-93e0a",
    storageBucket: "crwn-clothing-db-93e0a.appspot.com",
    messagingSenderId: "822293323281",
    appId: "1:822293323281:web:356020a8ff118cb4265bb0"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);
    // if data has no exit
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error) {
            console.log('error creating the user')

        }

        return userDocRef;

    }



    // if user data exists

    


    // return user Doc Ref
}