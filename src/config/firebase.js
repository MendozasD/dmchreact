import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB6_5tHQcqUo3lmJG9T9RYl3I_tR2aAYNA",
  authDomain: "dm-firebase-project.firebaseapp.com",
  projectId: "dm-firebase-project",
  storageBucket: "dm-firebase-project.appspot.com",
  messagingSenderId: "591971659940",
  appId: "1:591971659940:web:f18e89242db07fabd6f631",
  measurementId: "G-6GEEX8Q0RK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
