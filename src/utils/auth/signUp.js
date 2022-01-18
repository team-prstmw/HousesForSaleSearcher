import { makeRequest } from './makeRequest';

// const API_KEY = `${process.env.REACT_APP_FIREBASE_APP_KEY}`;

const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCitsvLe-Yf_n2lpVF4k4FRZyoJl_Kt1Ks`;

export const signUp = (email, password) => {
  return makeRequest(SIGN_UP_URL, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });
};

export default signUp;
