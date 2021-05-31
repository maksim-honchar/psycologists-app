import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyCIXCoyWzgT2e-cL5UiJnntsBs8c4daUjU",
    authDomain: "psychologists-4329e.firebaseapp.com",
    projectId: "psychologists-4329e",
});

const db = firebase.firestore();

export default db;
