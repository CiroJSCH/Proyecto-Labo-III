import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/main.js';
import changePasswordVisibility from '../common/changePasswordVisibility.js';
import errors from '../../firebase/errors.js';

const loginError = document.getElementById('loginError');
const emailContainer = document.getElementById('emailContainer');
const passwordContainer = document.getElementById('passwordContainer');

const passwordToggle = document.getElementById('password-toggle');
passwordToggle.addEventListener('click', () => {
  changePasswordVisibility('password');
});

const signInForm = document.getElementById('signInForm');

signInForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = signInForm.email.value;
  const password = signInForm.password.value;

  if (email.trim().length === 0) {
    emailContainer.classList.replace('border-l-accent', 'border-l-red-500');
    loginError.innerHTML = 'Email required';
    return;
  }

  if (password.trim().length === 0) {
    passwordContainer.classList.replace('border-l-accent', 'border-l-red-500');
    loginError.innerHTML = 'Password required';
    return;
  }

  passwordContainer.classList.replace('border-l-red-500', 'border-l-accent');
  emailContainer.classList.replace('border-l-red-500', 'border-l-accent');

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = `${window.location.origin}/src/pages/home.html`;
  } catch (error) {
    loginError.innerHTML = errors[error.code];

    if (errors[error.code].includes('Password')) {
      passwordContainer.classList.replace(
        'border-l-accent',
        'border-l-red-500',
      );
      emailContainer.classList.replace('border-l-red-500', 'border-l-accent');
    } else {
      emailContainer.classList.replace('border-l-accent', 'border-l-red-500');
      passwordContainer.classList.replace(
        'border-l-red-500',
        'border-l-accent',
      );
    }
  }
});
