import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  // apiKey:
  // authDomain:
  // databaseURL:
  // projectId:
  // storageBucket:
  // messagingSenderId:
  // measurementId:
};
firebase.initializeApp(firebaseConfig);

export default firebase;
