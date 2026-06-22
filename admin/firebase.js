import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
   apiKey: "AIzaSyBmyfpcpArx6Wz1hD576w0vDbA7CyF5Y5s",
   authDomain: "goryshky-trubochky.firebaseapp.com",
   projectId: "goryshky-trubochky",
   storageBucket: "goryshky-trubochky.firebasestorage.app",
   messagingSenderId: "635921712385",
   appId: "1:635921712385:web:5c8e3a5d7b1541367b4700",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
