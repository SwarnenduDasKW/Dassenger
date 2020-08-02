import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBZ20OlGRazhP_mk66Pz38bruNDJTxvkRs",
    authDomain: "das-messenger.firebaseapp.com",
    databaseURL: "https://das-messenger.firebaseio.com",
    projectId: "das-messenger",
    storageBucket: "das-messenger.appspot.com",
    messagingSenderId: "458002434867",
    appId: "1:458002434867:web:e5d2ac78b74d6a33ba4c46"
});

const db = firebaseApp.firestore();

export default db;
