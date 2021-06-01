/* eslint-disable @typescript-eslint/no-var-requires */
const fireStoreService = require('firestore-export-import');
const firebaseConfig = require('./config.js');
const serviceAccount = require('./serviceAccount.json');

// Upload JSON file to firestore
const uploadToFireStore = async () => {
  try {
    await fireStoreService.initializeApp(serviceAccount, firebaseConfig.databaseURL);
    await fireStoreService.restore('./specialists.json');
  } catch (error) {
    console.log(error);
  }
};

uploadToFireStore();
