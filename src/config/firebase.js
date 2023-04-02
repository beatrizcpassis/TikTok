// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxkS5V6YRw7EUPTqx2x1hw7yd2qvzE100",
  authDomain: "clone---tiktok.firebaseapp.com",
  projectId: "clone---tiktok",
  storageBucket: "clone---tiktok.appspot.com",
  messagingSenderId: "813073221455",
  appId: "1:813073221455:web:63d5b36ac8ad6bbdf0e73a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;