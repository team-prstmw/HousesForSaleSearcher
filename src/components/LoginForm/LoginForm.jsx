import React from 'react';
import PropTypes from 'prop-types';

import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';

import { signIn } from '/src/utils/auth';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const schema = yup.object({
  email: yup.string().email('Invalid email format').required('This field is required.'),
  password: yup.string().required('This field is required.'),
});

function LoginForm(props) {
  const [loginError, setLoginError] = React.useState(false);
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
    resolver: yupResolver(schema),
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
    signIn(email, password);
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
      <Stack spacing={4} sx={{ alignItems: 'center' }}>
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
              sx={{
                width: 327,
                height: 55,
                borderRadius: 4,
              }}
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
            <FormControl sx={{ m: 1 }} variant="outlined">
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
                sx={{
                  width: 327,
                  height: 55,
                }}
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
        <Button
          color="primary"
          type="submit"
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          sx={{
            width: 224,
            height: 36,
          }}
        >
          LOG IN
        </Button>
      </Stack>
    </Box>
  );
}

LoginForm.propTypes = {};

export default LoginForm;
