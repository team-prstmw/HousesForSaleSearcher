import * as yup from 'yup';

import { INVALID_EMAIL_ERROR } from '/src/const';

import { REQUIRED_ERROR, SPECIAL_CHARACTERS_ERROR } from './validationMessages';

const name = yup
  .string()
  .required(REQUIRED_ERROR)
  .matches(/^[A-Za-z0-9 ]+$/, SPECIAL_CHARACTERS_ERROR);

export const loginSchema = yup.object().shape({
  email: yup.string().email(INVALID_EMAIL_ERROR).required(REQUIRED_ERROR),
  password: yup.string().required(REQUIRED_ERROR),
});

export const registerSchema = loginSchema.shape({
  name,
});

export const profilePageSchema = yup.object({
  name,
  password: yup.string(),
});
