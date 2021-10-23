import React, { useState } from "react";
import react from "react";
import "./login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Login = ({ setLoginUser }) => {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:8080/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                history.push("/")
            })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter your Username"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
            <p>New User? <a href="#" onClick={() => history.push("/register")}>register</a></p>
            <div className="button" onClick={login}>Login</div>
        </div>
    )
}

export default Login