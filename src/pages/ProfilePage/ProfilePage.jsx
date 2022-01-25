import { yupResolver } from '@hookform/resolvers/yup';
import EditIcon from '@mui/icons-material/Edit';
import { Container, useTheme } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { deepOrange } from '@mui/material/colors';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import FormRow from './components/FormRow/FormRow';
import TextInput from './components/TextInput/TextInput';
import styles from './ProfilePage.module.css';

const REQUIRED_ERROR = 'This field is required.';
const SPECIAL_CHARACTERS_ERROR = 'No special characters allowed.';

const schema = yup.object({
  name: yup
    .string()
    .required(REQUIRED_ERROR)
    .matches(/^[A-Za-z0-9 ]+$/, SPECIAL_CHARACTERS_ERROR),
  password: yup.string(),
});

const ProfilePage = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSend = () => {};
  return (
    <div>
      <Container component={Paper} maxWidth={false} className={styles.container}>
        <div className={styles.headerContainer}>
          <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              centered
            >
              <Tab label="Account Settings" />
              <Tab label="Favourites" />
              <Tab label="Sell House" href="/sell-house" />
              <Tab label="Bought Houses" />
            </Tabs>
          </Box>
          <span className={styles.headerContent}>
            <Typography
              variant="h3"
              sx={{
                [theme.breakpoints.down('sm')]: {
                  fontSize: '2.2rem',
                },
              }}
              mb={2}
            >
              Welcome, Name!
            </Typography>
          </span>
        </div>
        <div className={styles.avatarContainer}>
          <Avatar
            sx={{ bgcolor: deepOrange[500], width: 100, height: 100, fontSize: 36, margin: 2 }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
          >
            N
          </Avatar>
          <Button variant="outlined" startIcon={<EditIcon />}>
            EDIT PHOTO
          </Button>
        </div>
        <main className="main">
          <Box component="form" onSubmit={handleSubmit(handleSend)}>
            <FormRow
              label={<Typography variant="h6">Name</Typography>}
              input={<TextInput placeholder="Name" register={register('name')} error={errors.name} />}
              action={<Button>Edit</Button>}
            />
            <FormRow
              label={<Typography variant="h6">E-mail</Typography>}
              input={<TextInput placeholder="mail@mail.com" disabled error={errors.email} />}
            />
            <FormRow
              label={<Typography variant="h6">Password</Typography>}
              input={
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <TextInput
                    placeholder="************"
                    password
                    defaultValue={null}
                    register={register('password')}
                    error={errors.password}
                  />
                </div>
              }
              action={<Button>Change</Button>}
            />
          </Box>
        </main>
      </Container>
    </div>
  );
};

export default ProfilePage;
