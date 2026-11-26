// Firebase settings for Irene and Dani's Homewood.
// These values are safe to put on GitHub. They only identify your project;
// firestore.rules is what decides who can read and write.

window.HOMEWOOD_FIREBASE = {
  apiKey: "AIzaSyDMtxFquVIMlVXKAmk-rwkO1vYPLs_IKG8",
  authDomain: "homewood-b685e.firebaseapp.com",
  projectId: "homewood-b685e",
  appId: "1:853055602559:web:9670f603dbd8a72e81a44a",

  // Your two emails live only in the Firestore rules in the Firebase console,
  // so they never end up in this public repo. Leave this list empty.
  allowedEmails: []
};

// Name of your shared save. Leave as is.
window.HOMEWOOD_HOME = "irene-dani";
