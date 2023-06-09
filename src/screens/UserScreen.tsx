import React, { useState , useEffect} from "react";
import { NavLink, useParams } from "react-router-dom";
import { User, users } from "../resources/User";
import { Alert, Button, Container, Grid, TextField, Typography } from "@mui/material";
import useForm from '../hooks/useForm';
import { addUser , updateUser, getUserById} from "../resources/UsersFirebase";
import { idText } from "typescript";
import { constants } from "fs/promises";

const emptyUser : User = {
  id: 0,
  name: '',
  role: '',
  salary: 0,
  address: '',
};

function UserScreen() {

  const { id } = useParams();

  useEffect(() => {
    getUserData();
  },[]);

  const [formUser, handleChange] = useForm(emptyUser);

  const [ error, setError ] = useState('');
  const [ success, setSuccess ] = useState('');

  const getUserData = async () => {
    const fbUser = await getUserById(id);
    if (fbUser) {
      const { name = fbUser.name, role = fbUser.role, salary = fbUser.salary, address = fbUser.address } = fbUser;
      handleChange({ target: { name: "name", value: name } });
      handleChange({ target: { name: "role", value: role } });
      handleChange({ target: { name: "salary", value: salary } });
      handleChange({ target: { name: "address", value: address } });
    }
  }

  const update = async () => {
    const result = await updateUser(id, formUser);
    return result !== undefined;
  }

  const save = async () => {
    let result 
    if (id !='0' ) {
      result = await update();
      result ? setSuccess("Updated user") : setError("User not updated");
    } else {
      result = await addUser(formUser);
      result ? setSuccess("User added") : setError("User not added");
    }
  }

  return (
    <Container>
      <Grid container spacing={2} marginTop={3}>
        <Grid container>
          <Grid item md={4} sm={3} xs={0}></Grid>
          <Grid item md={4} sm={6} xs={12}>
            { success && <Alert severity="success">{success}</Alert>}
            { error && <Alert severity="error">{error}</Alert>}
            <Typography variant="h4">
              Add/Edit user
            </Typography>
          </Grid>
        </Grid>
        <Grid container marginTop={3}>
          <Grid item md={4} sm={3} xs={0}></Grid>
          <Grid item md={4} sm={6} xs={12}>
            <TextField type="text" name="name" value={formUser.name} onChange={handleChange} fullWidth={true} label="Name" variant="outlined" />
            <br/><br/>
            <TextField type="text" name="role" value={formUser.role} onChange={handleChange} fullWidth={true} label="Role" variant="outlined" />
            <br/><br/>
            <TextField type="text" name="salary" value={formUser.salary} onChange={handleChange} fullWidth={true} label="Salary" variant="outlined" />
            <br/><br/>
            <TextField type="text" name="address" value={formUser.address} onChange={handleChange} fullWidth={true} label="Address" variant="outlined" />
            <br/><br/>
            <Button variant="outlined" onClick={save} >Save</Button>
            <NavLink 
                to={`/users`} 
                className="btn btn-info mx-2"
              >Return</NavLink>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default UserScreen;
