import firebase from "firebase/app";
import  "firebase/auth";

export const auth = firebase.initializeApp({
        apiKey: "AIzaSyCyEkH52LHbZ1ZaVodJ7-9ze0gcqx1h4Lg",
        authDomain: "unichat-e9013.firebaseapp.com",
        projectId: "unichat-e9013",
        storageBucket: "unichat-e9013.appspot.com",
        messagingSenderId: "604803267347",
        appId: "1:604803267347:web:55c04398304bfbca04b8e6"
}).auth();
