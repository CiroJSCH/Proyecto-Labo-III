import { checkAuthState } from '../common/authUser.js';

checkAuthState((user) => {
  if (user) {
    console.log('Usuario autenticado:', user);
  } else {
    console.log('Ningún usuario autenticado');
  }
});
