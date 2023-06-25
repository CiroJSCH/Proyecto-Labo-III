import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export const errorNotification = (msg) => {
  Toastify({
    text: msg || 'Something went wrong',
    duration: 2000,
    close: false,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: {
      background: '#EF4444',
      minWidth: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 15px',
    },
  }).showToast();
};

export const successNotification = (msg) => {
  Toastify({
    text: msg || 'Success',
    duration: 2000,
    close: false,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: {
      background: 'linear-gradient(to right, #00b09b, #96c93d)',
      minWidth: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 15px',
    },
  }).showToast();
};
