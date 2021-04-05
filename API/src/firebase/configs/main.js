require('dotenv').config()

export default firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: `${process.env.FIREBASE_PROJECTID}.firebaseapp.com`,
    databaseURL: `${process.env.FIREBASE_PROJECTID}.firebaseio.com`,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: `${process.env.FIREBASE_PROJECTID}.appspot.com`,
    messagingSenderId: process.env.FIREBASE_SENDERID,
    appId: process.env.FIREBASE_APPID,
    measurementId: `G-${process.env.FIREBASE_MEASUREMENTID}`,
}
