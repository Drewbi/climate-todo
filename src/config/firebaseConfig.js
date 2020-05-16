import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: process.env.API_KEY,
  authDomain: "climate-todos.firebaseapp.com",
  databaseURL: "https://climate-todos.firebaseio.com",
  projectId: "climate-todos",
  storageBucket: "climate-todos.appspot.com",
  messagingSenderId: process.env.MESSAGING_ID,
  appId: process.env.APP_ID
}

const firebaseApp = firebase.initializeApp(config)

export default firebaseApp.firestore()