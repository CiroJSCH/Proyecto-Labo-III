import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/main';

const provider = new GoogleAuthProvider();

const googleBtn = document.getElementById('googleBtn');

googleBtn.addEventListener('click', async () => {
  try {
    const credentials = await signInWithPopup(auth, provider);
    window.location.href = `${window.location.origin}/src/pages/home.html`;
  } catch (error) {
    // TODO: Reemplazar por tostify error indicando que algo salió mal
    console.error(error);
  }
});
