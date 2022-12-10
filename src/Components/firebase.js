import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBsdXHRXtT09aybNuMLljW0xUy8mgBW0Is",
  authDomain: "minhstav.firebaseapp.com",
  projectId: "minhstav",
  storageBucket: "minhstav.appspot.com",
  messagingSenderId: "1099029341298",
  appId: "1:1099029341298:web:a9877845f4d6d79679ceeb"
});

const auth=firebase.auth();
const storage=firebase.storage();

export {storage,auth};

