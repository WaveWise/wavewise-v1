import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/messaging'

var config = {
  apiKey: 'AIzaSyDczbAIxUebvLot3APTxbUNPebm8tBHbcs',
  authDomain: 'wavewise-6647c.firebaseapp.com',
  databaseURL: 'https://wavewise-6647c.firebaseio.com',
  projectId: 'wavewise-6647c',
  storageBucket: 'wavewise-6647c.appspot.com',
  messagingSenderId: '492736986338'
}

firebase.initializeApp(config)
const messaging = firebase.messaging()
messaging.usePublicVapidKey('BFoNLoQfUnCpVeu_yRHdMPdS2RNZ--2I-GYxrLtgBAeTNMX8RiHxVDBo74B2XRtaN6fVWW3QUSrZaJxICo5Qquo')
messaging.requestPermission().then(function () {
  console.log('Notification permission granted.')
  // TODO(developer): Retrieve an Instance ID token for use with FCM.
  // ...
}).catch(function (err) {
  console.log('Unable to get permission to notify.', err)
})

export default firebase
