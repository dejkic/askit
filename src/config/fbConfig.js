import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBif5kmZcn6zXIXXUCQkvDVrqpGLZWtFZA",
    authDomain: "my-project-askit.firebaseapp.com",
    databaseURL: "https://my-project-askit.firebaseio.com",
    projectId: "my-project-askit",
    storageBucket: "my-project-askit.appspot.com",
    messagingSenderId: "196797836431",
    appId: "1:196797836431:web:9875c9dead9ca9c95ad4fa",
    measurementId: "G-JP1NHWN0QW",
    //useFirestoreForProfile: true,
    //userProfile: 'users'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;