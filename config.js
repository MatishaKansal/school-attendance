import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB4M2gW1TZAL4sVGRMvlzv_KBqO5xB490s",
    authDomain: "attendance-1e9cd.firebaseapp.com",
    databaseURL: "https://attendance-1e9cd.firebaseio.com",
    projectId: "attendance-1e9cd",
    storageBucket: "attendance-1e9cd.appspot.com",
    messagingSenderId: "832054197069",
    appId: "1:832054197069:web:05705916ebaef975b49504",
    measurementId: "G-GK5ZKJLYNH"
  };
  if(!firebase.apps.length){ 
  firebase.initializeApp(firebaseConfig);
 } 
 export default firebase.database()