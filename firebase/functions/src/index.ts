import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import * as serviceAccount from './mezzoapp-a1cbd-firebase-adminsdk.json'

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://mezzoapp-a1cbd.firebaseio.com"
// });

// var admin = require("firebase-admin");

var serviceAccount = require("../mezzoapp-a1cbd-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mezzoapp-a1cbd.firebaseio.com"
});


// export const getFeed = functions.https.onRequest(async (req,res) => {
//     const docs = await admin.firestore().collection('posts').limit(10).get()
//     res.send(docs.docs.map(doc => doc.data()))
// })

export const getFeed = functions.https.onCall(async (req,res) => {
    const docs = await admin.firestore().collection('posts').limit(10).get()
    return docs.docs.map(doc => doc.data())
})

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
