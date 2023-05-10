import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { users } from "../resources/User";
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { getUsers, deleteUser} from "../resources/UsersFirebase";
import useForm from "../hooks/useForm";
import { DocumentData, QueryDocumentSnapshot, QuerySnapshot } from "firebase/firestore";

function UsersScreen() {

  const [ users, setUsers ] = useState<QueryDocumentSnapshot<DocumentData>[] | []>([]);

  useEffect(() => {
    getUsersData();
  },[]);

  const getUsersData = async () => {
    const fbUsers = await getUsers();
    setUsers(fbUsers.docs); 
  }

  const removeUser = async (userId: any) => {
    await deleteUser(userId)
    getUsersData()
  }

    return (
      <Container>
        <Grid container spacing={2} marginTop={3}>
          <Grid container>
            <Grid item md={1} sm={1} xs={0}></Grid>
            <Grid item md={10} sm={10} xs={12}>
              <Typography variant="h4">
                Users list
              </Typography>
              <NavLink 
                to={`/users/0`} 
                className="btn btn-info mx-2"
              >Add new user</NavLink>
              <Divider color="black" />
            </Grid>
          </Grid>
          <Grid container marginTop={2}>
            <Grid item md={1} sm={1} xs={0}></Grid>
            <Grid item md={10} sm={10} xs={12}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align="right">Name</TableCell>
                      <TableCell align="right">Address</TableCell>
                      <TableCell align="right">Role</TableCell>
                      <TableCell align="right">Salary</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      users.map((user: QueryDocumentSnapshot<DocumentData>) => {

                        const { name, address, role, salary } = user.data();
                        const { id } = user;
                        return (
                          <TableRow
                            key={id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                          <TableCell>{id}</TableCell>
                          <TableCell align="right"> {name}</TableCell>
                          <TableCell align="right">{address}</TableCell>
                          <TableCell align="right">{role}</TableCell>
                          <TableCell align="right">{salary}</TableCell>
                          <TableCell >
                            <NavLink 
                              to={`/users/${id}`} 
                              className="btn btn-info mx-2"
                            >Edit</NavLink>
                          <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => removeUser(id)}>Delete</Button>
                          <NavLink 
                              to={`/view/${id}`} 
                              className="btn btn-info mx-2"
                            >View</NavLink>
                          </TableCell>
                        </TableRow>);
                      })
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
  export default UsersScreen;