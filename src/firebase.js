import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyBmDVAyiu26jyaAM1UHRNdmNW5GtO-gGXE',
    authDomain: 'coding-anxiety.firebaseapp.com',
    databaseURL: 'https://coding-anxiety.firebaseio.com',
    projectId: 'coding-anxiety',
    storageBucket: 'coding-anxiety.appspot.com',
    messagingSenderId: '758786716395',
};
firebase.initializeApp(config);
export default firebase;
