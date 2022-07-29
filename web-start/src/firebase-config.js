/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBrXDhnK6TwvmSfFEY2uFp1pmYDp-d0VPU",
  authDomain: "friendly-chat-app-57b9f.firebaseapp.com",
  projectId: "friendly-chat-app-57b9f",
  storageBucket: "friendly-chat-app-57b9f.appspot.com",
  messagingSenderId: "245641737710",
  appId: "1:245641737710:web:f2d81a3bb90468f1970aff"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}