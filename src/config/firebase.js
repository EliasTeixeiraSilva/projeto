
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCkErDbq7Npvc39cBcDLbjZyf6w-AxqwZU",
  authDomain: "eliasedson513-e5cb5.firebaseapp.com",
  projectId: "eliasedson513-e5cb5",
  storageBucket: "eliasedson513-e5cb5.appspot.com",
  messagingSenderId: "789811097218",
  appId: "1:789811097218:web:68a23eb810acc16e034e9b",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, auth, storage }
