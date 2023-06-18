import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: 'cinehub-59a36.firebaseapp.com',
  projectId: 'cinehub-59a36',
  storageBucket: 'cinehub-59a36.appspot.com',
  messagingSenderId: '358645305248',
  appId: process.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
