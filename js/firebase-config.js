
const firebaseConfig = {
  apiKey: "AIzaSyDaTySb9_wtiR20dLgRvZVYTBYD5Vw-W1c",
  authDomain: "cappurpg.firebaseapp.com",
  projectId: "cappurpg",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const storage = firebase.storage();