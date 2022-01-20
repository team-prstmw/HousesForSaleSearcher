import { SIGN_UP_URL } from '../../URLs';
import makeRequest from '../services/makeRequest';

export const signUp = (email, password) => {
  return makeRequest(SIGN_UP_URL, {
    method: 'GET',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });
};

export default signUp;
