import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFZxUwL3hicBo0d3vKvm6_HlTipxhNBWM",
  authDomain: "hoomans-task.firebaseapp.com",
  projectId: "hoomans-task",
  storageBucket: "hoomans-task.firebasestorage.app",
  messagingSenderId: "187964218947",
  appId: "1:187964218947:web:175a3e3f115f32644cfef6",
  measurementId: "G-3TKL9873GV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app, db}