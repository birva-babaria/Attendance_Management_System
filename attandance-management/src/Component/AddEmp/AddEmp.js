import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { addUser } from '../../Service/api';
import { useHistory } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import './AddEmp.css';

const initialValue = {
    name: '',
    email: '',
    category:'',
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


const AddEmp = () => {
    const [user, setUser] = useState(initialValue);
    const { name, email, category,status } = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await addUser(user);
        history.push('./all');
    }

    return (
        <div>
            <Sidebar />
            <div className="outercontainer">
                <div class="container">
                    <div class="child">
                        <FormGroup className={classes.container}>
                            <Typography variant="h3">ADD RECORD</Typography>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Name</InputLabel>
                                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Email</InputLabel>
                                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Category</InputLabel>
                                <Input onChange={(e) => onValueChange(e)} name='category' value={category} id="my-input" />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Status</InputLabel>
                                <Input onChange={(e) => onValueChange(e)} name='status' value={status} id="my-input" />
                            </FormControl>
                            <FormControl>
                                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add Record</Button>
                            </FormControl>
                        </FormGroup>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmp;