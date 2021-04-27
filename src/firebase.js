import firebase from 'firebase'
import '@firebase/firestore' // 👈 If you're using firestore
import ReduxSagaFirebase from 'redux-saga-firebase'

const myFirebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBXLghscMdEpUwkrzjPtdXtqcdl2S44_Jo',
  authDomain: 'my-app.firebaseapp.com',
  databaseURL: 'https://chat-fd782.firebaseio.com',
  projectId: 'chat-fd782'
})

const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp)

export default reduxSagaFirebase
