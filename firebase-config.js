// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmsf9tYwtmG915TJGuD4yWKtKpk-AG80s",
  authDomain: "tienda-valeria-orrego-m.firebaseapp.com",
  projectId: "tienda-valeria-orrego-m",
  storageBucket: "tienda-valeria-orrego-m.firebasestorage.app",
  messagingSenderId: "332493370004",
  appId: "1:332493370004:web:86e69ac368035a2fd93a81",
  measurementId: "G-HMEN3NV03K"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();