const { https } = require("firebase-functions");

exports.log = https.onRequest((req, res) => {
  return res.status(200).send("It Works!!!");
});
