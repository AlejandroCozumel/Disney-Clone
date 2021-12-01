import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.GOOGLE_APIKEY,
  authDomain: process.env.GOOGLE_AUTHDOMAIN,
  projectId: process.env.GOOGLE_PROJECT_ID,
  storageBucket: process.env.GOOGLE_STORAGE_BUCKET,
  messagingSenderId: process.env.GOOGLE_MESSAGING,
  appId: process.env.GOOGLE_APPID,
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };