import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/main.js';
import errors from '../../firebase/errors.js';
import changePasswordVisibility from '../common/changePasswordVisibility.js';

// Fields
const usernameContainer = document.getElementById('usernameContainer');
const usernameError = document.getElementById('usernameError');
const emailContainer = document.getElementById('emailContainer');
const emailError = document.getElementById('emailError');
const passwordContainer = document.getElementById('passwordContainer');
const passwordError = document.getElementById('passwordError');
const password2Container = document.getElementById('password2Container');
const password2Error = document.getElementById('password2Error');

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = registerForm.username.value;
  const email = registerForm.email.value;
  const pass1 = registerForm.password.value;
  const pass2 = registerForm.password2.value;

  if (username.trim().length < 4) {
    usernameContainer.classList.replace('border-l-accent', 'border-l-red-500');
    usernameError.textContent = 'At least 4 characters';
    return;
  }
  usernameContainer.classList.replace('border-l-red-500', 'border-l-accent');
  usernameError.textContent = '';

  if (email.trim().length === 0) {
    emailContainer.classList.replace('border-l-accent', 'border-l-red-500');
    emailError.textContent = 'Email required';
    return;
  }
  emailContainer.classList.replace('border-l-red-500', 'border-l-accent');
  emailError.textContent = '';

  if (pass1.trim().length < 6) {
    passwordContainer.classList.replace('border-l-accent', 'border-l-red-500');
    passwordError.textContent = 'At least 6 characters';
    return;
  }
  passwordContainer.classList.replace('border-l-red-500', 'border-l-accent');
  passwordError.textContent = '';

  if (pass1.trim() !== pass2.trim()) {
    password2Container.classList.replace('border-l-accent', 'border-l-red-500');
    password2Error.textContent = 'Passwords do not match';
    return;
  }
  password2Container.classList.replace('border-l-red-500', 'border-l-accent');
  password2Error.textContent = '';

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      pass1,
    );
    const { user } = userCredentials;

    await setDoc(doc(db, 'Users', user.uid), {
      username,
      email,
      favorites: [],
      seeLater: [],
      profilePicture:
        'https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg',
    });

    window.location.href = `${window.location.origin}/src/pages/main.html`;
  } catch (error) {
    if (errors[error.code].includes('Email')) {
      emailContainer.classList.replace('border-l-accent', 'border-l-red-500');
      emailError.textContent = errors[error.code];
    }
  }
});

const passwordToggle = document.getElementById('password-toggle');
passwordToggle.addEventListener('click', () => {
  changePasswordVisibility('password');
});

const passwordToggle2 = document.getElementById('password-toggle2');
passwordToggle2.addEventListener('click', () => {
  changePasswordVisibility('password2', 'password-toggle2');
});
