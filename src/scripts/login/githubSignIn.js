import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/main';

const provider = new GithubAuthProvider();

const githubBtn = document.getElementById('githubBtn');

githubBtn.addEventListener('click', async () => {
  try {
    const credentials = await signInWithPopup(auth, provider);
    window.location.href = `${window.location.origin}/src/pages/home.html`;
  } catch (error) {
    // TODO: Reemplazar por tostify error indicando que algo salió mal
    console.error(error);
  }
});
