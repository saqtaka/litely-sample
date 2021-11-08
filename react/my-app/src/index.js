import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import FirebaseAuthUserInfo from './firebase/FirebaseAuthUserInfo';
import FirebaseAuthSigninButton from './firebase/FirebaseAuthSigninButton';
import FirebaseAuthSignupButton from './firebase/FirebaseAuthSignupButton';
import FirebaseAuthGoogleButton from './firebase/FirebaseAuthGoogleButton';
import FirebaseAuthSignoutButton from './firebase/FirebaseAuthSignoutButton';
import FirestoreAddButton from './firebase/FirestoreAddButton';
import FirestoreList from './firebase/FirestoreList';
import reportWebVitals from './reportWebVitals';

// import firebaseConfig from './firebase-config';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDf9wc8MCB3H_gmvQbxsuBTo5QCadRu8tg',
  authDomain: 'litely-f6e0d.firebaseapp.com',
  projectId: 'litely-f6e0d',
  storageBucket: 'litely-f6e0d.appspot.com',
  messagingSenderId: '400014490635',
  appId: '1:400014490635:web:47198f41e8f33d603e5b0e',
  measurementId: 'G-9Z9X0FJZRL'
}

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <FirebaseAuthUserInfo /> */}
    <FirebaseAuthSignupButton />
    <FirebaseAuthSigninButton />
    <FirebaseAuthGoogleButton />
    <FirebaseAuthSignoutButton />
    <FirestoreAddButton />
    <FirestoreList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
