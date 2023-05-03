import React from 'react';
import Container from '@mui/material/Container';
import { TableCell,TableContainer, Table,TableHead, TableRow, TableBody, Paper} from '@mui/material';
import { users } from '../resources/User';
import { NavLink } from 'react-router-dom';


function UsersScreen() {
  return (
    <Container>
        
        <TableContainer component={Paper} sx={{ m: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="right">name</TableCell>
                <TableCell align="right">role</TableCell>
                <TableCell align="right">address</TableCell>
                <TableCell align="right">salary</TableCell>
                <TableCell align="right">actions</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {users.map(({id, name, role, address, salary}) => (
                <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell>{id}</TableCell>
                <TableCell align="right">{name}</TableCell>
                <TableCell align="right">{role}</TableCell>
                <TableCell align="right">{address}</TableCell>
                <TableCell align="right">{salary}</TableCell>
                <TableCell align="right">
                  <NavLink to={`/user/${id}`} className="btn btn-info mx-2">Editar</NavLink>
                </TableCell>

                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

    </Container>
  );
}

export default UsersScreen;
