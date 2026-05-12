import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCOymFHp6FmIFHIEpT8ED9VMv9Reh7TxXk',
  authDomain: 'tecnico-heladeras.firebaseapp.com',
  projectId: 'tecnico-heladeras',
  storageBucket: 'tecnico-heladeras.firebasestorage.app',
  messagingSenderId: '1048477882283',
  appId: '1:1048477882283:web:17d2e0b879e774cfe0a4ee',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
