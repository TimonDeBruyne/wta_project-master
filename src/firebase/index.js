import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCHHcAKaOYE2bXu4Wq1ZnniMP-5Hm6a9XU",
  authDomain: "wtaproject-bc24b.firebaseapp.com",
  projectId: "wtaproject-bc24b",
  storageBucket: "wtaproject-bc24b.appspot.com",
  messagingSenderId: "569000340989",
  appId: "1:569000340989:web:8cfc96a148b24725443d94"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
