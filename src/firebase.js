import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBxv1_pDFgVrrDm22gjFprZxO7eVeDvQ_A",
    authDomain: "linkedin-clone-ccf33.firebaseapp.com",
    projectId: "linkedin-clone-ccf33",
    storageBucket: "linkedin-clone-ccf33.appspot.com",
    messagingSenderId: "268233145365",
    appId: "1:268233145365:web:3114a6bd84c4af128ba21c"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const storage = getStorage(app);

  export {auth, provider, storage };
  export default db;



