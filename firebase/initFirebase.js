// // import { initializeApp } from "firebase/app";
// // import { getFirestore } from "firebase/firestore";
// // import { getDatabase } from "@firebase/database";

// // import firebase from 'firebase/app';
// // import 'firebase/auth';
// // import 'firebase/firestore';
// // import 'firebase/storage';
// // import 'firebase/analytics';
// // import 'firebase/performance'''
// // // impr



// // export default function initFirebase(){
// //     // if(!firebase.getApp.getApp.app){
// //         firebase.initializeApp(clientCredentials)

// //  console.log(clientCredentials.apiKey+"borey");
// //     // }
// // }






// // function initFirebase() {

// // // console.log(clientCredentials.apiKey+"borey");
   


// //     if (!firebase.apps.length) {
// //         if (typeof window !== undefined) {
// //             initializeApp(clientCredentials);
// //             console.log("Firebase has been init successfully");
// //         }
// //      }else {
// //         firebase.app(); // if already initialized, use that one
// //      }
// // }

// // const app = initializeApp(clientCredentials);

// // const db = getFirestore(app);

// // const realDB = getDatabase(app);

// // export { initFirebase, db, realDB };

// import { initializeApp, getApp,getApps } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
// // const clientCredentials = {
// //     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
// //     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
// //     databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
// //     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// //     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
// //     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
// //     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// //     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// // };
// // const clientCredentials = {
// //     apiKey: "AIzaSyAjRgwPwj89_VagzuFjfxR8OlZx0W4MvNA",
// //     authDomain: "todo-list-14520.firebaseapp.com",
// //     projectId: "todo-list-14520",
// //     storageBucket: "todo-list-14520.appspot.com",
// //     messagingSenderId: "323527312328",
// //     appId: "1:323527312328:web:4e82b24f51936d233436fd",
// //     measurementId: "G-7WWQMLB2V5"
// //   };
// // Initialize Firebase with a default Firebase project

//     // initializeApp(clientCredentials);



// // Initialize Firebase with a second Firebase project
// // const otherProject = initializeApp(otherProjectFirebaseConfig, "other");

// console.log(getApp().name);  // "[DEFAULT]"
// // console.log(otherProject.name);    // "otherProject"

// // Use the shorthand notation to access the default project's Firebase services
// // const defaultStorage = getStorage();
// // const defaultFirestore = getFirestore();

// // Use the otherProject variable to access the second project's Firebase services
// // const otherStorage = getStorage(otherProject);
// // const otherFirestore = getFirestore(otherProject);






// Import the functions you need from the SDKs you need
import  { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjRgwPwj89_VagzuFjfxR8OlZx0W4MvNA",
  authDomain: "todo-list-14520.firebaseapp.com",
  databaseURL: "https://todo-list-14520-default-rtdb.firebaseio.com",
  projectId: "todo-list-14520",
  storageBucket: "todo-list-14520.appspot.com",
  messagingSenderId: "323527312328",
  appId: "1:323527312328:web:4424cf74fc82c1a13436fd",
  measurementId: "G-0XLR020SF8"
};
// Initialize Firebase
// if(!getApps.length){
    
// if(!initializeApp.length){
//  const app = initializeApp(firebaseConfig);
//  console.log(!initializeApp.length); 
// }else{
//     initializeApp.app;
//     console.log(initializeApp.app); 
// }

export default function initFirebase(){}

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const realDB = getDatabase(app);

export { initFirebase, db, realDB };
// }
// const analytics = getAnalytics(app);



