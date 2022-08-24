import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { useEffect } from 'react';

// firebase app config
// this firebase app is dedicated to :
// - 'only' clients authentication (register & login)
// - Dealing with firestore db and storage by both clients and declarants

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};


const app = firebase.initializeApp(firebaseConfig, "firebase_app")

export const auth = app.auth()

export const db = app.firestore()