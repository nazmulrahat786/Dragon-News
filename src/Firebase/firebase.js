
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCp0NGyZkPlRYBbPwzE9y_TGhyfq3nxvQU",
  authDomain: "dragon-news-e4411.firebaseapp.com",
  projectId: "dragon-news-e4411",
  storageBucket: "dragon-news-e4411.firebasestorage.app",
  messagingSenderId: "101531342189",
  appId: "1:101531342189:web:71d818f461eb313a017664"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;