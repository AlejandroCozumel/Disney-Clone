import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAfz9TQ9gq9Agt2oPfeFbanLik0dElF31M",
  authDomain: "disney-clone-alex.firebaseapp.com",
  projectId: "disney-clone-alex",
  storageBucket: "disney-clone-alex.appspot.com",
  messagingSenderId: "1078655452452",
  appId: "1:1078655452452:web:f0cb943bb4cff18b0e5fb1"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };