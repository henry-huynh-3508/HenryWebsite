/* eslint-disable @typescript-eslint/no-var-requires */
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');
const cors = require('cors')({ origin: true });
const dotenv = require('dotenv');

dotenv.config();

sgMail.setApiKey(process.env.API_KEY);

admin.initializeApp();

exports.sendMessage = functions.https.onRequest(async (req, res) => {
  cors(req, res, () => {
    const { name, email, subject, message } = req.body.data;

    sgMail.send(
      {
        from: 'dev0@innolandsolutions.com',
        to: 'admin@innolandsolutions.com',
        subject: subject,
        text: `Name: ${name} Email: ${email} Message:${message}`,
      },
      (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: 'Error in sending email' });
        } else {
          console.log(body);
          res.send({
            message: 'Email sent successfully',
            data: 'Email sent!',
            status: 'Success',
          });
        }
      }
    );
  });
  await admin.firestore().collection('messages').add({ data: req.body.data });
});

exports.storeMessage = functions.firestore
  .document('/messages/{documentId}')
  .onCreate((snap, context) => {
    const data = snap.data().data;

    functions.logger.log('Adding message', context.params.documentId, data);

    return snap.ref.set({ data }, { merge: true });
  });
