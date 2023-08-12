import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {encryptData} from "../HelperFunction/HelperFunction"

const RegisterPage = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        localStorage.getItem('userInfo') ? navigate('/') : navigate('/registration');
    }, []);

    const handleSubmit = event => {
        event.preventDefault();

        fetch(`${process.env.REACT_APP_BASE_URL}/register-user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                password,
                email,
                username
            })
        })
            .then(data => data.json())
            .then(data => {
                if(data._id) {
                    const userInfo = JSON.stringify({
                        id: encryptData(data._id),
                        name: data.name,
                        surname: data.surname,
                        email: data.email,
                        username: data.username
                    });
                    localStorage.setItem('userInfo', userInfo);
                    setName('');
                    setEmail('');
                    setPassword('');
                    setUsername('');
                    navigate('/');
                }
            });
    };

    return (
        <div className='welcome-page'>
            <div className="uk-width-expand@m page-first-screen">
                <div className="fl-hd-cover"></div>
                <div className="form-login">
                    {/* <div className="form-login__social">
                        <ul className="social">
                            <li><a href="http://www.google.com"><img src="fonts/google.svg" alt="google" /></a></li>
                            <li><a href="http://www.facebook.com"><img src="fonts/facebook.svg" alt="facebook" /></a></li>
                            <li><a href="http://www.twitter.com"><img src="fonts/twitter.svg" alt="twitter" /></a></li>
                        </ul>
                    </div> */}
                    <div className="form-login__box">
                        <div className="uk-heading-line uk-text-center"><span>Registration</span></div>
                        <form onSubmit={handleSubmit}>
                            <div className="uk-margin">
                                <input 
                                    className="uk-input" 
                                    type="text" 
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="uk-margin">
                                <input 
                                    className="uk-input" 
                                    type="email" 
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="uk-margin">
                                <input 
                                    className="uk-input" 
                                    type="password" 
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="uk-margin">
                                <input 
                                    className="uk-input" 
                                    type="text" 
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="uk-margin">
                                <button className="uk-button uk-button-danger uk-width-1-1" type="submit">
                                    Register
                                </button>
                            </div>
                            <div className="uk-text-center">
                                <span>Already have an account?</span>
                                <Link className="uk-margin-small-left" to="/login">Log In</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;