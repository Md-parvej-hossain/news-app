
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCaTh6EwO5-gVUGIYmOzqfLcjByOoBDL9E',
  authDomain: 'drogon-news-b4669.firebaseapp.com',
  projectId: 'drogon-news-b4669',
  storageBucket: 'drogon-news-b4669.firebasestorage.app',
  messagingSenderId: '273117330403',
  appId: '1:273117330403:web:ff93e5cd8b271101713ed6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
