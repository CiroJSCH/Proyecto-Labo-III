import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/main';

const checkAuthState = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

export default checkAuthState;
