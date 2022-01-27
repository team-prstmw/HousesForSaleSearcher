import makeRequest from '/src/utils/services/makeRequest';

export const signInSignUp = (email, password, signURL) => {
  return makeRequest(signURL, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });
};
