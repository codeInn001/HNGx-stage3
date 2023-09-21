// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBzcQLhuKON5wrTXk5jUrzY_cVJSGrXrqU",
    authDomain: "codeinn.firebaseapp.com",
    projectId: "codeinn",
    storageBucket: "codeinn.appspot.com",
    messagingSenderId: "37475493258",
    appId: "1:37475493258:web:99e9877530bb0892fbd473"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;