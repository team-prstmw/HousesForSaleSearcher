import React from 'react';
import PropTypes from 'prop-types';

import { useForm, Controller } from 'react-hook-form';

import isEmail from 'validator/lib/isEmail';

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

function LoginForm(props) {
  const [loginError, setLoginError] = React.useState(false);
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });
  const { control, handleSubmit } = useForm();

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

  const onSubmit = (data) => {
    signIn(data.email, data.password);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        alignContent: 'center',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} sx={{ alignItems: 'center' }}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            className="materialUIInput"
            rules={{
              required: {
                value: true,
                message: 'email is required',
              },
              validate: (email) => isEmail(email) || 'must be valid email address',
            }}
            render={({ field }) => (
              <TextField
                id="outlined-textarea-email"
                label="E-mail"
                placeholder="E-mail"
                required
                type="email"
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
            name="password"
            control={control}
            defaultValue=""
            className="materialUIInput"
            rules={{ required: true, minLength: 8 }}
            render={({ field }) => (
              <>
                <FormControl sx={{ m: 1 }} variant="outlined">
                  <InputLabel required htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    placeholder="Password"
                    aria-describedby="component-helper-text"
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
                  <FormHelperText id="component-helper-text">At least 8 characters</FormHelperText>
                </FormControl>
              </>
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
      </form>
    </Box>
  );
}

LoginForm.propTypes = {};

export default LoginForm;
