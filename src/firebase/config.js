import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCItjpJxo7sG3av7PFGqx-J1wJDLk4yyf4",
  authDomain: "project-torrejon.firebaseapp.com",
  projectId: "project-torrejon",
  storageBucket: "project-torrejon.appspot.com",
  messagingSenderId: "347514517463",
  appId: "1:347514517463:web:71005223aec81875c5fd92"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}