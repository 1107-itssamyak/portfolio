// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAooiD8UoQvyALqamWFg6ldw8J2hlR6u6Q",
    authDomain: "samyak-mehta.firebaseapp.com",
    projectId: "samyak-mehta",
    storageBucket: "samyak-mehta.appspot.com",
    messagingSenderId: "779627581550",
    appId: "1:779627581550:web:a2ac27e5361898d69d167f",
    measurementId: "G-HJ2P15QXG8"
});

const db = firebaseApp.firestore();
export { db };