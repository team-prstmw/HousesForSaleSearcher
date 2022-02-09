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
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';

import styles from '/src/components/LoginForm/LoginForm.module.css';
import LoginContext from '/src/contexts/LoginContext';
import { loginSchema } from '/src/schemas/authSchemas';
import { SIGN_IN_URL } from '/src/URLs';
import { signInSignUp } from '/src/utils/auth';

function LoginForm(props) {
  const { fn, ...otherProps } = props;
  const login = useContext(LoginContext);

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
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
    signInSignUp(email, password, SIGN_IN_URL, fn, login.loggedIn, login.login, login.logout);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        alignContent: 'center',
      }}
    >
      <Stack spacing={4} className={styles.stack__wrapper}>
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
        <Button color="primary" type="submit" variant="contained" className={styles.loginButton}>
          LOG IN
        </Button>
      </Stack>
    </Box>
  );
}

export default LoginForm;
