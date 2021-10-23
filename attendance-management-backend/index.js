import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Routes from './server/route.js';

const app = express();
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', Routes);

const URL = 'mongodb://localhost:27017/attendancemanagementDB',

 PORT =  8080; 

 //user schema
const userschema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

//model
const User = new mongoose.model("User", userschema)


//routes
app.post("/login",(req, res) => {
    const {name, password} = req.body
    User.findOne({name: name}, (err, user) => {
        if(user){
            if(password === user.password){
                res.send({message: "Login successful", user: user})
            }
            else{
                res.send({message: "Password didn't match"})
            }
        }
        else{
            res.send({message: "User not registered"})
        }
    })
})

app.post("/register",(req, res) => {
    const {name, email, password} = req.body
    User.findOne({name: name}, (err, user) => {
        if(user){
            res.send({message: "User already registered"})
        }
        else{
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                }
                else{
                    res.send({message: "Successfully Registered, please login now!"})    
                }
            })
        }
    })
})


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => { 
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})
