import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCfV5CLyh8ee7zwhlbveQPfGtvwCCDZkFw",
    authDomain: "todoist-clone-d67a2.firebaseapp.com",
    databaseURL: "https://todoist-clone-d67a2-default-rtdb.firebaseio.com",
    projectId: "todoist-clone-d67a2",
    storageBucket: "todoist-clone-d67a2.appspot.com",
    messagingSenderId: "719340859166",
    appId: "1:719340859166:web:4bbaccecc1aef3be6da30f"
});

export { firebaseConfig as firebase };