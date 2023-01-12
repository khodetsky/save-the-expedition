import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';

// const API_KEY = import.meta.env.VITE_API_KEY;
// const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
// const DATABASE_URL = import.meta.env.VITE_DATABASE_URL;
// const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
// const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET;
// const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID;
// const APP_ID = import.meta.env.VITE_APP_ID;
import { getDatabase, ref, set, onValue, update} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAbp55vXq6IhPOfyUseZNrzROOCkVnynRs",
  authDomain: "to-my-creator.firebaseapp.com",
  databaseURL: "https://to-my-creator-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "to-my-creator",
  storageBucket: "to-my-creator.appspot.com",
  messagingSenderId: "918382125317",
  appId: "1:918382125317:web:709a6acaa732f1b82a176c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getDatabase();

setPersistence(auth, browserSessionPersistence);

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const user = auth.currentUser;

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log(user);
//     // ...
//   } else {
//     console.log('user not found')
//   }
// });

// export const nameRef = ref(db, 'posts/' + postId + '/username');

export function writeUserDataInDB(userId, name) {
  set(ref(db, 'users/' + userId), {
    username: name,
    countGuessedWords: {
        animals: 0,
        geograpgy: 0,
        tools: 0,
    },
    points : 0,
  });
}

export function addUserPoints(userId, oldPoints,  newPoints) {
    update(ref(db), { ['users/' + userId + '/points']: oldPoints + newPoints });
}

export function incrementUserGuessedWord(userId, category, oldPoints) {
    update(ref(db), { ['users/' + userId + '/countGuessedWords/' + category]: oldPoints + 1 });
}

export function writeUserGuessedWordsInState(postId, dispatch, method) {
    const userRef = ref(db, 'users/' + postId + '/countGuessedWords');

    onValue(userRef, (snapshot) => {
      dispatch(method(snapshot.val()));
    });
}

export function writeUserPointsInState(postId, dispatch, method) {
    const userRef = ref(db, 'users/' + postId + '/points');

    onValue(userRef, (snapshot) => {
      dispatch(method(snapshot.val()));
    });
}

export function writeUserNameInState(postId, dispatch, method) {
    const userRef = ref(db, 'users/' + postId + '/username');

     onValue(userRef, (snapshot) => {
         dispatch(method(snapshot.val()));
    });
}