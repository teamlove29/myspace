const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyCPZyWWf8oQi3e8o3aqEcUlJNhc30j9ars",
  authDomain: "myspace-dev-1ae9e.firebaseapp.com",
  databaseURL: "https://myspace-dev-1ae9e.firebaseio.com",
  projectId: "myspace-dev-1ae9e",
  storageBucket: "myspace-dev-1ae9e.appspot.com",
  messagingSenderId: "379818176061",
  appId: "1:379818176061:web:9e431d12e626f04e03c454",
  measurementId: "G-YQVB6MPMV3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
module.exports = firebaseApp;
