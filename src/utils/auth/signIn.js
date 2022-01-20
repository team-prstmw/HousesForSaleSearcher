import { SIGN_IN_URL } from '../../URLs';
import makeRequest from '../services/makeRequest';

export const signIn = (email, password) => {
  return makeRequest(SIGN_IN_URL, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });
};

export default signIn;
