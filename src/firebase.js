// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAFpCaqLjNKesPUcsA4qYLtePiAUgt-IVo',
  authDomain: 'react-disney-plus-app-3391d.firebaseapp.com',
  projectId: 'react-disney-plus-app-3391d',
  storageBucket: 'react-disney-plus-app-3391d.appspot.com',
  messagingSenderId: '1012943627967',
  appId: '1:1012943627967:web:9344fbd98292ccc879080a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
