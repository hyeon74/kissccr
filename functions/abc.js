const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/:id', (req, res) => res.send(`abcget id = ${req.params.id}`));
app.get('/', (req, res) => res.send('abcget /'));

module.exports = functions.https.onRequest(app);
// or module.exports = app