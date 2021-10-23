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

const Profile = () => {
    const classes = useStyles();
    const editUserDetails = () => {
       document.getElementById("email").value= "admin123@gmail.com";
    }

    return (
        <div>
            <Sidebar />
            <div className="outercontainer">
                <div class="container">
                    <div class="child">
                        <FormGroup className={classes.container}>
                            <Typography variant="h4">EDIT PROFILE</Typography>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Name</InputLabel>
                                <Input type="text"  value="ADMIN" id="name" aria-describedby="my-helper-text" />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Email</InputLabel>
                                <Input type="text" value="admin@gmail.com" id="email" aria-describedby="my-helper-text" />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Category</InputLabel>
                                <Input type="text" value="ADMIN" id="category" aria-describedby="my-helper-text" />
                            </FormControl>
                            <FormControl>
                                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit Profile</Button>
                            </FormControl>
                        </FormGroup>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;