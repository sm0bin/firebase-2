// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhwoFCQN9K3ESNP4RprqeYafyDCnTCzXU",
    authDomain: "fir-2-ef49f.firebaseapp.com",
    projectId: "fir-2-ef49f",
    storageBucket: "fir-2-ef49f.appspot.com",
    messagingSenderId: "166741441195",
    appId: "1:166741441195:web:5bdb76d3ec470633d9d5ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;