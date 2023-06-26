import { collection, doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { db, auth } from '../../firebase/index.js';

export const checkAuthState = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

export const getUserById = async (userId) => {
  const usersCollection = collection(db, 'Users');
  const userDoc = doc(usersCollection, userId);
  const userSnapshot = await getDoc(userDoc);

  return userSnapshot.data();
};

export const logout = () => {
  signOut(auth).then(() => {
    sessionStorage.removeItem('userId');
    window.location.href = '/src/pages/login.html';
  });
};
