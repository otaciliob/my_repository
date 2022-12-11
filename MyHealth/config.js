// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { initializeFirestore, getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBsahXmdaSRUYWKfnJ8HlAp8OjMMaBodX8",
  authDomain: "my-health-auth.firebaseapp.com",
  projectId: "my-health-auth",
  storageBucket: "my-health-auth.appspot.com",
  messagingSenderId: "690874477360",
  appId: "1:690874477360:web:365085efd0c96e162976f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, { experimentalForceLongPolling: true })
const db2 = getFirestore(app)
const storage = getStorage(app)

export { app, auth, db, db2, storage }