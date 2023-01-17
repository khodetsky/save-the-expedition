import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';
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

export function writeUserDataInDB(userId, name) {
  set(ref(db, 'users/' + userId), {
    username: name,
    countGuessedWords: {
        animals: 0,
        geography: 0,
        tools: 0,
    },
    points : 0,
  });
}

export function addUserPoints(userId, oldPoints,  newPoints) {
    update(ref(db), { ['users/' + userId + '/points']: oldPoints + newPoints });
}

export function incrementUserGuessedWord(userId, category, categoriesArr) {
  const oldPoints = categoriesArr[category];
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