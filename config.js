import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { apiKey } from "./apikey";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "hoomans-task.firebaseapp.com",
  projectId: "hoomans-task",
  storageBucket: "hoomans-task.firebasestorage.app",
  messagingSenderId: "187964218947",
  appId: "1:187964218947:web:175a3e3f115f32644cfef6",
  measurementId: "G-3TKL9873GV"
};

console.log(process.env.API_KEY)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app, db}