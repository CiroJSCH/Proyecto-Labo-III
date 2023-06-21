import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/main';

const provider = new GoogleAuthProvider();

const googleBtn = document.getElementById('googleBtn');

googleBtn.addEventListener('click', async () => {
  try {
    const credentials = await signInWithPopup(auth, provider);

    const { user } = credentials;
    const username = user.displayName;
    const { email } = user;

    await setDoc(doc(db, 'Users', user.uid), {
      username,
      email,
      favorites: [],
      seeLater: [],
    });
  } catch (error) {
    // TODO: Reemplazar por tostify error indicando que algo salió mal
    console.error(error);
  }
});
