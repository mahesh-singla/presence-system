const functions = require("firebase-functions");
const admin = require("firebase-admin");

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

admin.initializeApp(firebaseConfig);

const auth = admin.auth();

const getAllUsers = (req, res) => {
  const maxResults = 1000;
  let allUsers = []
  res.set(
    "Access-Control-Allow-Origin",
    "https://maheshsingla1702693.netlify.app/"
  );
  res.set('Access-Control-Allow-Credentials', 'true');
  auth
    .listUsers(maxResults)
    .then((userRecords) => {
      userRecords.users.forEach((user) =>
        allUsers.push(user)
      );
      return res.end(JSON.stringify(allUsers));
    })
    .catch((error) => console.log(error));
};

module.exports = {
  api: functions.https.onRequest(getAllUsers),
};
