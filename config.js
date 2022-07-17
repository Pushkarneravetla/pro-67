import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    const firebaseConfig = {
        apiKey: "AIzaSyDAHy3gUb2H6e1VbQV3-PgFUdRNzRDcL0E",
        authDomain: "pro-67-ff60c.firebaseapp.com",
        projectId: "pro-67-ff60c",
        storageBucket: "pro-67-ff60c.appspot.com",
        messagingSenderId: "738918155898",
        appId: "1:738918155898:web:8a27750dc0f01533b85dc3"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();