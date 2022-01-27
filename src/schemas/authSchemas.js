import * as yup from 'yup';

import { INVALID_EMAIL_ERROR, REQUIRED_ERROR } from '/src/const';

export const loginSchema = yup.object().shape({
  email: yup.string().email(INVALID_EMAIL_ERROR).required(REQUIRED_ERROR),
  password: yup.string().required(REQUIRED_ERROR),
});

export const registerSchema = loginSchema.shape({
  name: yup.string().required(REQUIRED_ERROR),
});
