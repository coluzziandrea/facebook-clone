import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBA5DqL7QDLsTfIpAie4EjKmgEywTN_RjM',
  authDomain: 'facebook-coluzzi.firebaseapp.com',
  projectId: 'facebook-coluzzi',
  storageBucket: 'facebook-coluzzi.appspot.com',
  messagingSenderId: '336157107667',
  appId: '1:336157107667:web:af428b6c0cd6d92690bb26',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
