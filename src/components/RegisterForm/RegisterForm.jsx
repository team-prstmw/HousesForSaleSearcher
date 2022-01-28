import { yupResolver } from '@hookform/resolvers/yup';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/system/Box';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import styles from '/src/components/RegisterForm/RegisterForm.module.css';
import { registerSchema } from '/src/schemas/authSchemas';
import { RESET_PASSWORD, SIGN_UP_URL } from '/src/URLs';
import { resetPassword, signInSignUp } from '/src/utils/auth';

function RegisterForm(props) {
  const { fn, ...otherProps } = props;
  const [values, setValues] = useState({
    password: '',
    email: '',
    showPassword: false,
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(registerSchema),
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = ({ email, password }) => {
    signInSignUp(email, password, SIGN_UP_URL, fn);
  };
  const onReset = ({ email }) => {
    resetPassword(email, RESET_PASSWORD, fn);
  };

  return (
    <>
      <Box className={styles.registerForm__wrapper} component="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4} className={styles.stack__wrapper}>
          <Controller
            className="materialUIInput"
            name="name"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <TextField
                id="outlined-textarea-name"
                {...register('name')}
                error={!!errors?.name}
                helperText={errors?.name && errors?.name.message}
                label="Name"
                placeholder="Name"
                autoComplete="Name"
                required
                className={styles.textField}
                {...field}
              />
            )}
          />
          <Controller
            className="materialUIInput"
            name="email"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <TextField
                id="outlined-textarea-email"
                {...register('email')}
                error={!!errors?.email}
                helperText={errors?.email && errors?.email.message}
                label="E-mail"
                placeholder="E-mail"
                required
                type="email"
                autoComplete="email"
                className={styles.textField}
                value={values.email}
                onChange={handleChange('email')}
                {...field}
              />
            )}
          />
          <Controller
            className="materialUIInput"
            name="password"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <FormControl variant="outlined">
                <InputLabel
                  error
                  required
                  htmlFor="outlined-adornment-password"
                  {...register('password')}
                  error={!!errors?.password}
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  placeholder="Password"
                  error={!!errors?.password}
                  className={styles.textField}
                  {...field}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                <FormHelperText error>{errors?.password && errors?.password.message}</FormHelperText>
                <FormHelperText id="component-helper-text">At least 6 characters</FormHelperText>
              </FormControl>
            )}
          />
          <Button color="primary" type="submit" variant="contained" className={styles.registerButton}>
            REGISTER
          </Button>
        </Stack>
      </Box>
      <Button className={styles.resetPasswordButton} sx={{ fontSize: 12, mt: 1 }} variant="text" onClick={onReset}>
        Reset password
      </Button>
    </>
  );
}

export default RegisterForm;
