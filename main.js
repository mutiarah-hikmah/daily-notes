// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB-s8Tmh3FPYP7JQ5sX4Oi4rX7D6tNY6QU",
  authDomain: "dailynotesbymuti.firebaseapp.com",
  projectId: "dailynotesbymuti",
  storageBucket: "dailynotesbymuti.firebasestorage.app",
  messagingSenderId: "141339332541",
  appId: "1:141339332541:web:7ddd95795b5bbd64ce4cd4",
  measurementId: "G-D59GXM39X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Register
const registerForm = document.getElementById('register-form');
if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Registrasi berhasil!");
        window.location.href = "login.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}

// Login
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login berhasil!");
        window.location.href = "index.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}
