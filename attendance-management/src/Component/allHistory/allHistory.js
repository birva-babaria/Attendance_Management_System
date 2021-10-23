import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, Typography } from '@material-ui/core'
import { getUsers, deleteUser } from '../../Service/api';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import "./allHistory.css"

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


const AllHistory = () => {

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
                       <h1>ALL HISTORY</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllHistory;