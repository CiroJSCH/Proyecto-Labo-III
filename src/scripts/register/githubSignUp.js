import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/main';

const provider = new GithubAuthProvider();

const githubBtn = document.getElementById('githubBtn');

githubBtn.addEventListener('click', async () => {
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
