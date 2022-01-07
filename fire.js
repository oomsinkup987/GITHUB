// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js'
import {getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZotvDxUjfw_RJQWymdIqfsjdMAW6u8ok",
    authDomain: "arduino-1-89893.firebaseapp.com",
    databaseURL: "https://arduino-1-89893-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "arduino-1-89893",
    storageBucket: "arduino-1-89893.appspot.com",
    messagingSenderId: "962826463802",
    appId: "1:962826463802:web:3d8c76e72d19955ddee303",
    measurementId: "G-SB48NZD89Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
