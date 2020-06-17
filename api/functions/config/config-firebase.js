require("dotenv").config();
const firebase = require("firebase");
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
module.exports = firebaseApp;