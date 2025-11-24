
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY ,
  authDomain: import.meta.env.VITY_AUTHDOMAIN ,
  projectId: import.meta.env.VITY_PROJECTID ,
  storageBucket: import.meta.env.VITY_STORAGEBUCKET ,
  messagingSenderId: import.meta.env.VITY_MESSAGINGSENDERID ,
  appId: import.meta.env. VITY_APPID
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;