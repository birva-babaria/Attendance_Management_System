import React, {useState} from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    })

    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const {name, email, password, confirmpassword} = user
        if(name && email && password && (password === confirmpassword)){
            axios.post("http://localhost:8080/register", user)
            .then(res => alert(res.data.message))
            history.push("/login")
        }
        else{
            alert("Invalid Input");
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="confirmpassword" value={user.confirmpassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <p>Already registered? <a href="#" onClick={() => history.push("/login")}>login</a></p>
            <div className="button" onClick={register} >Register</div>
        </div>
    )
}

export default Register