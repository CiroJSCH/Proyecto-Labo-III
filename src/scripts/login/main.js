import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/main.js';
import changePasswordVisibility from '../common/changePasswordVisibility.js';

const passwordToggle = document.getElementById('password-toggle');
passwordToggle.addEventListener('click', () => {
  changePasswordVisibility('password');
});

const signInForm = document.getElementById('signInForm');

signInForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = signInForm.email.value;
  const password = signInForm.password.value;

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(credentials);
    window.location.href = `${window.location.origin}/src/pages/home.html`;
  } catch (error) {
    console.log(error.code);
  }
});
