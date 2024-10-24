const functions = require('firebase-functions');

const admin = require('firebase-admin');

const cors = require('cors')({ origin: true });

/**
 * Update user identification data
 * @param body {String, Object}
 * @return {string} message success | error
 * @forPlay https://us-central1-dynamicweb-cad18.cloudfunctions.net/updateUser
 * @project dynamicweb-cad18
 * @projectConsole https://console.firebase.google.com/project/dynamicweb-cad18/overview
 * @Unhandled error cleaning up build images: https://console.cloud.google.com/gcr/images/dynamicweb-cad18/us/gcf
 */
exports.updateUser = functions.https.onRequest((req, res) => {
  const uid = req.body.uid;
  const data = req.body.data;

  return cors(req, res, async () => {
    try {
      const userRecord = await admin.auth().updateUser(uid, data);
      res.send(userRecord.toJSON());
    } catch (error) {
      res.status(500).send(error);
    }
  });
});