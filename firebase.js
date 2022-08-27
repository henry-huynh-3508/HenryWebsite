import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

const firebaseConfig = {
  firebase config - huyearly@gmail.com
};

const app = initializeApp(firebaseConfig);

const functions = getFunctions(app);

export const sendMessage = httpsCallable(functions, 'sendMessage');
