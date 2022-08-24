import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

// declarants app config
// this app is dedicated to :
// - 'only' declarants authentication

const declarantAppConfig = {
    apiKey: process.env.REACT_APP_DECLARANT_API_KEY,
    authDomain: process.env.REACT_APP_DECLARANT_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_DECLARANT_PROJECT_ID,
    storageBucket: process.env.REACT_APP_DECLARANT_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_DECLARANT_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_DECLARANT_APP_ID
}

const declarantAuthApp = firebase.initializeApp(declarantAppConfig, "declarant_auth")

export const declarantAuth = declarantAuthApp.auth()