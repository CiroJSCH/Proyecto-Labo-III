import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/main';

const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', async () => {
  try {
    await signOut(auth);
    window.location.href = `${window.location.origin}/src/pages/login.html`;
  } catch (error) {
    console.error(error);
  }
});
