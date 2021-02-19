import firebase from "firebase";
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyD6haC7Q827rpclaV7J5vpCMDe_M1ynMxM",
  authDomain: "testimonialapp-b5a00.firebaseapp.com",
  projectId: "testimonialapp-b5a00",
  storageBucket: "testimonialapp-b5a00.appspot.com",
  messagingSenderId: "14005610271",
  appId: "1:14005610271:web:38401bbdfc5c032ee2322a",
  measurementId: "G-G5FXDDNMSP",
};

firebase.initializeApp(firebaseConfig);

let config = {};

config.auth = firebase.auth();
config.firestore = firebase.firestore();
config.storage = firebase.storage();

export default config;
