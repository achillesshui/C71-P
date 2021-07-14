import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyBo0W3icnrzOh5uO3bz53ZgO6wNWEien0w",
    authDomain: "c71p-7bd59.firebaseapp.com",
    projectId: "c71p-7bd59",
    storageBucket: "c71p-7bd59.appspot.com",
    messagingSenderId: "555477332696",
    appId: "1:555477332696:web:b9bcf6453438c077f75dad"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore() ;