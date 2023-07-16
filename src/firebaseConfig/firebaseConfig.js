import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBV1lZqJdF1lUS9newGFIbNQm4WrSoEyRA",
  authDomain: "delivery-app-f343b.firebaseapp.com",
  projectId: "delivery-app-f343b",
  storageBucket: "delivery-app-f343b.appspot.com",
  messagingSenderId: "717812631435",
  appId: "1:717812631435:web:3b5cfdd7ff98fb489e518e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);