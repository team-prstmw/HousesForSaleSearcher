import makeRequest from '/src/utils/services/makeRequest';

export const resetPassword = async (email, signURL, changeState) => {
  const response = await makeRequest(signURL, {
    method: 'POST',
    body: JSON.stringify({
      requestType: 'PASSWORD_RESET',
      email,
    }),
  });
  const data = await response.json();
  if (response.status !== 200) {
    changeState(data.error.message);
  }
  return data;
};
