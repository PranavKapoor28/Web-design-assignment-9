import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageCard from "../../Components/PageCard/PageCard";
import axios from "axios";
import classes from "./Login.module.css";
import Form from "../../Components/Forms/form.js";
import validator from 'validator';
import { validPassword } from './regex.js';

const Login = () => {


    const [emailError, setEmailError] = useState('')
    const [pwdError, setPwdError] = useState(false);


    const [data, setdata] = useState({
        email: "",
        password: "",
    });
    const [message, setmessage] = useState("");

    const changeEmail = (e) => {

        var email = e.target.value

        if (!validator.isEmail(email)) {

            setEmailError('Enter valid Email!')
        }
        else {
            setEmailError('');
        }

        const temp = { ...data };
        temp[e.target.name] = e.target.value;
        setdata(temp);


    };

    const changePass = (value) => {


        if (validPassword.test(value)) {
            setPwdError("Password is not valid");
        }
        else {
            setPwdError("");
        }

        const temp = { ...data };
        temp[value.target.name] = value.target.value;
        setdata(temp);


    };



    const submit = async (e) => {


        try {

            const apiData = await axios.post(
                "http://localhost:8880/user/login",
                data
            );

            setmessage(apiData.data.data.message);
            console.log(apiData.data.data.message)
            console.log(apiData);

            // if (apiData.data.data.message.equals("Login Successfully")) {
            window.location.href = '/home';
            //}

        } catch (error) {
            console.log(error.response);
            setmessage(error.response.data.error);
        }



    };



    return (

        <div>

            <div className="Heading">
                <h1>Sign In Now</h1>
                <br></br>
            </div>


            <div className={classes.inputContainer} style={{ paddingBottom: "15%" }}>


                <input
                    className={classes.Input}
                    name="email"
                    type="email"
                    placeholder="harvey@pearsonspecter.com"
                    value={data.email}
                    onChange={(e) => changeEmail(e)}
                />
                <span style={{
                    fontWeight: 'bold',
                    color: 'red',
                }}>{emailError}</span>

                <input
                    password="*******"
                    type="password"
                    className={classes.Input}
                    name="password"
                    placeholder="Enter Password"
                    value={data.password}
                    onChange={(e) => changePass(e)}
                />
                <span style={{
                    fontWeight: 'bold',
                    color: 'red',
                }}>{pwdError}</span>
                <button onClick={submit} className={classes.Submit}>
                    Submit
                </button>
                <br />
                <div style={{
                    fontWeight: 'bold',
                    color: 'red',
                    backgroundColor: 'yellow',
                    padding: '4px 4px 4px 4px'
                }}>{message}</div>
            </div>
        </div >
    );

};


export default Login;
