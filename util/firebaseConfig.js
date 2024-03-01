// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// import { getAnalytics, isSupported } from 'firebase/analytics'
// import { getApps, initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore';

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAR8wp5bw0VXB86LN5eMfPnBPJoENnmuyA",
//   authDomain: "laundrytrackerswat.firebaseapp.com",
//   projectId: "laundrytrackerswat",
//   storageBucket: "laundrytrackerswat.appspot.com",
//   messagingSenderId: "855604861369",
//   appId: "1:855604861369:web:bf72d5b5312cc3bc8bbe68",
//   measurementId: "G-QWZWJV0Z09"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Initialize Firestore
// const db = getFirestore(app);

// // Export initialized Firebase Firestore instance
// export { db };

// // Initializes Firebase
// export async function initializeFirebase() {
//   // return if already initialized
//   if (getApps().length) return;
//   // set up analytics if supported
//   const supported = await isSupported();
//   if (supported) getAnalytics(app);
// }







import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAR8wp5bw0VXB86LN5eMfPnBPJoENnmuyA",
  authDomain: "laundrytrackerswat.firebaseapp.com",
  projectId: "laundrytrackerswat",
  storageBucket: "laundrytrackerswat.appspot.com",
  messagingSenderId: "855604861369",
  appId: "1:855604861369:web:bf72d5b5312cc3bc8bbe68",
  measurementId: "G-QWZWJV0Z09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

