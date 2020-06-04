const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyCRzwfUN9yWSL6-ksSYhi1bSfZkjIIU-DM",
  authDomain: "test-f34cc.firebaseapp.com",
  databaseURL: "https://test-f34cc.firebaseio.com/",
  projectId: "test-f34cc",
  storageBucket: "test-f34cc.appspot.com",
  messagingSenderId: "215446099997",
  appId: "1:215446099997:web:e3ac2e5c44a52b98ac4ef4",
};
firebase.initializeApp(config);

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
