// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARYY2hZINogGBT-uGR8MJkVFK_PYpmwVI",
  authDomain: "next-fire-yt1.firebaseapp.com",
  projectId: "next-fire-yt1",
  storageBucket: "next-fire-yt1.appspot.com",
  messagingSenderId: "20707683895",
  appId: "1:20707683895:web:dfbf7423a89b582ef419b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};

export default app;