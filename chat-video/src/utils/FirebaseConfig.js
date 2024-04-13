import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEyvCc8YmQPqftDOY5hnRWtUyhyLdIN90",
  authDomain: "chat-video-bf3ca.firebaseapp.com",
  projectId: "chat-video-bf3ca",
  storageBucket: "chat-video-bf3ca.appspot.com",
  messagingSenderId: "287391393291",
  appId: "1:287391393291:web:e1720eeafb7c8f78ae090e",
  measurementId: "G-RBY7WK4S61",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
