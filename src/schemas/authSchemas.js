import * as yup from 'yup';

import { INVALID_EMAIL_ERROR } from '/src/const';

export const REQUIRED_ERROR = 'This field is required.';
export const SPECIAL_CHARACTERS_ERROR = 'No special characters allowed.';

export const loginSchema = yup.object().shape({
  email: yup.string().email(INVALID_EMAIL_ERROR).required(REQUIRED_ERROR),
  password: yup.string().required(REQUIRED_ERROR),
});

export const registerSchema = loginSchema.shape({
  name: yup.string().required(REQUIRED_ERROR),
});

export const profilePageSchema = yup.object({
  name: yup
    .string()
    .required(REQUIRED_ERROR)
    .matches(/^[A-Za-z0-9 ]+$/, SPECIAL_CHARACTERS_ERROR),
  password: yup.string(),
});
