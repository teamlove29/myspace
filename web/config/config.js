import firebase from 'firebase'
try {
  firebase.initializeApp({
    apiKey: 'AIzaSyCPZyWWf8oQi3e8o3aqEcUlJNhc30j9ars',
    authDomain: 'myspace-dev-1ae9e.firebaseapp.com',
    databaseURL: 'https://myspace-dev-1ae9e.firebaseio.com',
    projectId: 'myspace-dev-1ae9e',
    storageBucket: 'myspace-dev-1ae9e.appspot.com',
    messagingSenderId: '379818176061',
    appId: '1:379818176061:web:9e431d12e626f04e03c454',
    measurementId: 'G-YQVB6MPMV3'
  })
} catch (err) {
  // we skip the “already exists” message which is
  // not an actual error when we’re hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error raised', err.stack)
  }
}
const firebaseApp = firebase

export default firebaseApp
