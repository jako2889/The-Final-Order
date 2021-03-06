import React, {useRef, useState} from 'react';
import ReactDOM from "react-dom";
import { navigate } from "gatsby";

import {colors} from "../../../styles/global/colors";
import { FcGoogle } from "react-icons/fc";
import {Wrapper, Form, Text, Title, Link, GoogleButton, CloseIcon, Overlay} from "./form_styles";
import Input from "../atoms/input";
import Button from "../atoms/submit_button";
import { local_server_path } from "../../../global_variables";
import ErrorModal from '../../app/atoms/error_modal/error_modal';

const googleAlert = () => {
    alert("Not implemented yet :-)");
}

const Login = ({isShowing, hide, showSignup}) => {
    const [error, setError] = useState(false);
    const form = useRef(null);

    const onSubmit = e => {
        e.preventDefault();
        const formData = new FormData(form.current);
        fetch(local_server_path + `/private/api/users/login.php`, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
        .catch(error => console.error("Error:", error))
        .then(response => {
            console.log("Success:", response);
            if(response === undefined){
                console.log("Something did not go as planned!");
                setError(!error);
            }else{
                document.cookie = "email=" + response.email;
                document.cookie = "userID=" + response.id;
                let cookieValues = document.cookie;
                console.log('Cookie: ' + cookieValues);
                navigate("/app/my-classrooms");
            }
        });
    }

    const closeErrorMsg = () => {
        setError(!error);
    }

    // https://upmostly.com/tutorials/modal-components-react-custom-hooks - createPortal reference
    return (
        isShowing ? ReactDOM.createPortal(
        <React.Fragment>
            <Wrapper>
                <Form ref={form} onSubmit={e => onSubmit(e)}>
                <Title>Login</Title>
                <GoogleButton onClick={googleAlert}>
                    <FcGoogle className="icon" color="#b000b5" size="1.5em" /> Sign up with Google
                </GoogleButton>
                <Text>Or</Text>
                <Input placeholder="Email" name="email" type="text"></Input>
                <Input placeholder="Password" name="password" type="password"></Input>
                <Button type="submit" name="Login"/>
                <Link linkColor="#8C4A6E" onClick={googleAlert}>Forgot your password?</Link>
                <Text>Not a member yet? <Link onClick={showSignup}>Sign up</Link></Text>
                <CloseIcon onClick={hide} color={colors.orange} size="1.5em"/>
                {error ? <ErrorModal closeErrorMsg={closeErrorMsg} errorMsg="Login failed. Try again."></ErrorModal> : null}
                </Form>
            </Wrapper>
            <Overlay /> 
            </React.Fragment>, document.body
        ) : null
    )}

export default Login;