import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/main.js';

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = `${window.location.origin}/src/pages/login.html`;
  } else {
    console.log(auth.currentUser);
  }
});
