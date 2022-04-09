const functions = require("firebase-functions");
const admin = require("firebase-admin");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require('express');
const axios = require('axios')
const cors = require('cors');

const app = express();

const verifyToken = async (req, res, next) => {
    console.log(JSON.stringify(req.headers))
    const tk = req.headers.authorization
    //const tk = req.headers.authorization.split.split(' ')[1]
    const u = await admin.auth().verifyIdToken(tk)
                    .then((decoded) => res.status(200).send(decoded))
                    .catch((err) => res.status(401).send(err));
    console.log(u)
    next()
  }
  
app.use(cors({ origin: true }))
app.use(verifyToken)
app.get('/', (req, res) => res.send('abcdefg'))

exports.widgets = functions.https.onRequest(app);
//module.exports = functions.https.onRequest(app);