import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../../Service/api';
import Sidebar from '../sidebar/sidebar';

const initialValue = {
    name: '',
    email: '',
    category: '',
    status:'',
    date:''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '0 0 0 25%',
        '& > *': {
            marginTop: 10
        }
    }
})

const EditEmp = () => {
    const [user, setUser] = useState(initialValue);
    const { name, email,category,status,date} = user;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async () => {
        const response = await editUser(id, user);
        history.push('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <Sidebar />
            <div className="outercontainer">
                <div class="container">
                    <div class="child">
                        <FormGroup className={classes.container}>
                            <Typography variant="h4">EDIT INFORMATION</Typography>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Name</InputLabel>
                                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Email</InputLabel>
                                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Category</InputLabel>
                                <Input onChange={(e) => onValueChange(e)} name='category' value={category} id="my-input" aria-describedby="my-helper-text" />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Status</InputLabel>
                                <Input onChange={(e) => onValueChange(e)} name='status' value={status} id="my-input" aria-describedby="my-helper-text" />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Date</InputLabel>
                                <Input onChange={(e) => onValueChange(e)} name='date' value={date} id="my-input" aria-describedby="my-helper-text" />
                            </FormControl>
                            <FormControl>
                                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
                            </FormControl>
                        </FormGroup>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditEmp;