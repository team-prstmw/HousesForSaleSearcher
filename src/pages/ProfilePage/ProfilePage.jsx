import { yupResolver } from '@hookform/resolvers/yup';
import EditIcon from '@mui/icons-material/Edit';
import { Container, useTheme } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { profilePageSchema } from '/src/schemas/authSchemas';

import EditButtons from './components/EditButtons/EditButtons';
import FormRow from './components/FormRow/FormRow';
import TextInput from './components/TextInput/TextInput';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();
  const [formData, setFormData] = useState({ nameEditable: false, passwordEditable: false, tempImage: '' });

  const {
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(profilePageSchema),
  });

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const avatarUrl = () => {
    if (formData?.image && typeof formData?.image === 'string') {
      return formData.image;
    }

    if (formData?.tempImage instanceof File) {
      return URL.createObjectURL(formData.tempImage);
    }
    return '';
  };

  const setEditable = (field) =>
    setFormData((prevState) => ({ ...prevState, [`${field}Editable`]: !prevState[`${field}Editable`] }));

  const onChangeName = () => {
    setEditable('name');
    setFormData((prevState) => ({ ...prevState, namePrev: getValues('name') }));
    // SEND REQUEST
  };

  const onChangePassword = () => {
    setEditable('password');
    setFormData((prevState) => ({ ...prevState, passwordPrev: getValues('password') }));
    // SEND REQUEST
  };

  const onCancelChange = (field) => {
    const fieldPrev = `${field}Prev`;

    if (formData[fieldPrev]) {
      setValue(field, formData[fieldPrev]);
      setEditable(field);
    } else {
      setEditable(field);
    }
  };

  const onAddAvatar = (image) => {
    setFormData((prevState) => ({ ...prevState, tempImage: image }));
    // SEND REQUEST
  };

  const getInitials = () => (getValues('name')?.[0] ? getValues('name')[0].toUpperCase() : undefined);

  return (
    <div>
      <Container component={Paper} maxWidth={false} className={styles.container}>
        <div className={styles.headerContainer}>
          <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
              sx={{ maxWidth: 'max-content', margin: '0 auto' }}
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
              {`Welcome${getValues('name') ? `, ${getValues('name')}` : ''}!`}
            </Typography>
          </span>
        </div>
        <div className={styles.avatarContainer}>
          <Avatar sx={{ bgcolor: '#30336b', width: 100, height: 100, fontSize: 36, margin: 2 }} src={avatarUrl()}>
            {getInitials()}
          </Avatar>
          <input
            style={{ display: 'none' }}
            id="images-upload"
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => onAddAvatar(e.target.files[0])}
          />
          <label htmlFor="images-upload">
            <Button variant="text" component="span" startIcon={<EditIcon />}>
              EDIT PHOTO
            </Button>
          </label>
        </div>
        <main className="main">
          <Box component="form">
            <FormRow
              label={<Typography variant="h6">Name</Typography>}
              input={
                <TextInput
                  placeholder="Name"
                  readOnly={!formData.nameEditable}
                  register={register('name')}
                  error={errors.name}
                />
              }
              action={
                formData.nameEditable ? (
                  <EditButtons onCancel={() => onCancelChange('name')} onSave={onChangeName} />
                ) : (
                  <Button onClick={() => setEditable('name')}>Edit</Button>
                )
              }
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
                    readOnly={!formData.passwordEditable}
                    register={register('password')}
                    error={errors.password}
                  />
                </div>
              }
              action={
                formData.passwordEditable ? (
                  <EditButtons onCancel={() => onCancelChange('password')} onSave={onChangePassword} />
                ) : (
                  <Button onClick={() => setEditable('password')}>Edit</Button>
                )
              }
            />
          </Box>
        </main>
      </Container>
    </div>
  );
};

export default ProfilePage;
