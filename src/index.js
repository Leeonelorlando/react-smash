import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBEKg-oUlFTd5mctpwqGXBWNOI_6P70t8Q",
  authDomain: "smashedbabies-8c788.firebaseapp.com",
  projectId: "smashedbabies-8c788",
  storageBucket: "smashedbabies-8c788.appspot.com",
  messagingSenderId: "570063581186",
  appId: "1:570063581186:web:b6a629ddfffa59c2baf71b",
  measurementId: "G-HYGT3DC0M5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);