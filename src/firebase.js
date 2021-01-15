import firebase from 'firebase';

const config = {
   apiKey: "AIzaSyDc7bsa-nIFhwiWQpD0PVFIp-HyTpmSlk4",
   authDomain: "trailhero-db.firebaseapp.com",
   databaseURL: "https://trailhero-db.firebaseio.com",
   projectId: "trailhero-db",
   storageBucket: "trailhero-db.appspot.com",
   messagingSenderId: "682438130311",
   appId: "1:682438130311:web:0abcaf4585f52c8c1b5622"
 };
 // Initialize Firebase
firebase.initializeApp(config);

export default firebase;

