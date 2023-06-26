import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/index.js';
import { errorNotification } from '../../tostify/main';

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
      profilePicture: user.photoURL,
    });

    sessionStorage.setItem('userId', credentials.user.uid);
    window.location.href = `${window.location.origin}/src/pages/main-page.html`;
  } catch (error) {
    errorNotification();
  }
});
