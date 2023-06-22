const changePasswordVisibility = (
  passwordField,
  toggle = 'password-toggle',
) => {
  const password = document.getElementById(passwordField);
  const passwordToggle = document.getElementById(toggle).firstElementChild;
  if (password.type === 'password') {
    password.type = 'text';
    passwordToggle.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    password.type = 'password';
    passwordToggle.classList.replace('fa-eye-slash', 'fa-eye');
  }
};

export default changePasswordVisibility;
