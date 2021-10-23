import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, Typography } from '@material-ui/core'
import { getUsers, deleteUser } from '../../Service/api';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';

const useStyles = makeStyles({
    table: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        borderCollapse: 'collapse',
        fontSize: 0.9,
        fontFamily: 'sans - serif',
        minWidth: 400,
        boxShadow: '0 0 20 rgba(0, 0, 0, 0.15)',
        textAlign: 'center',
    },
thead: {
    '& > *': {
        fontSize: 20,
            background: '#058ece',
                color: '#FFFFFF',
                textAlign: 'center',
        }
},
row: {
    '& > *': {
        fontSize: 15,
        textAlign: 'center',
    }
}
})


const AllEmp = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <div>
            <Sidebar />
            <div className="outercontainer">
                <div class="container">
                    <div class="child">
                        <Typography variant="h4">EMPLOYEE LIST</Typography>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow className={classes.thead}>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Category</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow className={classes.row} key={user.id}>
                                        <TableCell>{user._id}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.category}</TableCell>
                                        <TableCell>{user.status}</TableCell>
                                        <TableCell>
                                            <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 10 }} width="24" height="24" viewBox="0 0 24 24"><path d="M12.255 21.954c-.443.03-.865.046-1.247.046-3.412 0-8.008-1.002-8.008-2.614v-2.04c2.197 1.393 5.513 1.819 8.099 1.778-.146-.64-.161-1.39-.085-1.998h-.006c-3.412 0-8.008-1.001-8.008-2.613v-2.364c2.116 1.341 5.17 1.78 8.008 1.78l.569-.011.403-2.02c-.342.019-.672.031-.973.031-3.425-.001-8.007-1.007-8.007-2.615v-2.371c2.117 1.342 5.17 1.78 8.008 1.78 2.829 0 5.876-.438 7.992-1.78v2.372c0 .871-.391 1.342-1 1.686 1.178 0 2.109.282 3 .707v-7.347c0-3.361-5.965-4.361-9.992-4.361-4.225 0-10.008 1.001-10.008 4.361v15.277c0 3.362 6.209 4.362 10.008 4.362.935 0 2.018-.062 3.119-.205-1.031-.691-1.388-1.134-1.872-1.841zm-1.247-19.954c3.638 0 7.992.909 7.992 2.361 0 1.581-5.104 2.361-7.992 2.361-3.412.001-8.008-.905-8.008-2.361 0-1.584 4.812-2.361 8.008-2.361zm6.992 15h-5l1-5 1.396 1.745c.759-.467 1.647-.745 2.604-.745 2.426 0 4.445 1.729 4.901 4.02l-1.96.398c-.271-1.376-1.486-2.418-2.941-2.418-.483 0-.933.125-1.335.331l1.335 1.669zm5 2h-5l1.335 1.669c-.402.206-.852.331-1.335.331-1.455 0-2.67-1.042-2.941-2.418l-1.96.398c.456 2.291 2.475 4.02 4.901 4.02.957 0 1.845-.278 2.604-.745l1.396 1.745 1-5z" /></svg>
                                                Edit</Button>
                                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 10 }} width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                </svg>
                                                Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AllEmp;