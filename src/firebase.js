import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCkFpVPeT5leOYrMgG6xnLI0uxwyeJ6Wcc",
  authDomain: "dassenger-ada7a.firebaseapp.com",
  databaseURL: "https://dassenger-ada7a.firebaseio.com",
  projectId: "dassenger-ada7a",
  storageBucket: "dassenger-ada7a.appspot.com",
  messagingSenderId: "344428174745",
  appId: "1:344428174745:web:9fbbf80e7ea7b462b18708"
});

const db = firebaseApp.firestore();

export default db;
