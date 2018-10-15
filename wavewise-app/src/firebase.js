import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

var config = {
  apiKey: 'AIzaSyDczbAIxUebvLot3APTxbUNPebm8tBHbcs',
  authDomain: 'wavewise-6647c.firebaseapp.com',
  databaseURL: 'https://wavewise-6647c.firebaseio.com',
  projectId: 'wavewise-6647c',
  storageBucket: 'wavewise-6647c.appspot.com',
  messagingSenderId: '492736986338'
}

firebase.initializeApp(config)

export default firebase
