const functions = require("firebase-functions");
var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");
const firebaseApp = require("./config");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-f34cc.firebaseio.com/",
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.RegisterEmail = functions.https.onRequest((req, res) => {
  firebaseApp
    .auth()
    .createUserWithEmailAndPassword(req.param.email, req.param.password)
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      res.send(error);
    });
});
