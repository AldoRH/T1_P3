import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { users } from '../resources/User';
import useForm from '../hooks/useForm';

function User() {
  const { id } = useParams();
  const user = users.find((user) => user.id.toString() === id);

  const initialValues = user
    ? {
        name: user.name,
        role: user.role,
        address: user.address,
        salary: user.salary,
      }
    : {};

  const [formValues, handleChange] = useForm(initialValues);

  if (!user) {
    return (
      <div className='App'>
        <p>User Not Found</p>
      </div>
    );
  }

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 4, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <div>
        <TextField
          id='outlined-helperText'
          label='Name'
          name='name'
          value={formValues.name}
          onChange={handleChange}
        />
        <TextField
          id='outlined-helperText'
          label='Role'
          name='role'
          value={formValues.role}
          onChange={handleChange}
        />
        <TextField
          id='outlined-helperText'
          label='Address'
          name='address'
          value={formValues.address}
          onChange={handleChange}
        />
        <TextField
          id='outlined-helperText'
          label='Salary'
          name='salary'
          value={formValues.salary}
          onChange={handleChange}
        />
      </div>
      <NavLink to={`/users`} className='btn btn-info mx-4'>
        Regresar
      </NavLink>
    </Box>
  );
}

export default User;
