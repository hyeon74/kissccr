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

admin.initializeApp();

const verifyToken = async (req, res, next) => {
    console.log(JSON.stringify(req.headers))
    let tk = req.headers.authorization
    console.log('##############tk['+ tk + ']')
    tk = tk.split(' ')[1]
    try{
      const u = await admin.auth().verifyIdToken(tk)
      console.log(u)
    }catch(e){
      console.log('##############'+ e)
    }
   
    next()
  }
  
app.use(cors({ origin: true }))
app.use(verifyToken)
app.get('/', (req, res) => res.send('abcdefg'))

exports.widgets = functions.https.onRequest(app);
//module.exports = functions.https.onRequest(app);