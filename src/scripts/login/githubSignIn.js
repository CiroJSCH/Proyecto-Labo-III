import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/main';
import { errorNotification } from '../../tostify/main';

const provider = new GithubAuthProvider();

const githubBtn = document.getElementById('githubBtn');

githubBtn.addEventListener('click', async () => {
  try {
    const credentials = await signInWithPopup(auth, provider);
    const userID = credentials.user.uid;

    const userSnapshot = await getDoc(doc(db, 'Users', userID));
    if (!userSnapshot.exists()) {
      // User not registered
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
    }
    sessionStorage.setItem('userId', userID);
    window.location.href = `${window.location.origin}/src/pages/main.html`;
  } catch (error) {
    errorNotification();
  }
});
