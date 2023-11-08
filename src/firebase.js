import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCuAvqAuDxJ90h-FgXWkA1PYfWiL8qMTmI",
    authDomain: "social-media-app-44534.firebaseapp.com",
    projectId: "social-media-app-44534",
    storageBucket: "social-media-app-44534.appspot.com",
    messagingSenderId: "407199791493",
    appId: "1:407199791493:web:d5dd33380d1ca862edacec"
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth();