import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {encryptData} from "../HelperFunction/HelperFunction"

const LoginPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        localStorage.getItem('userInfo') ? navigate('/') : navigate('/login');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch(`${process.env.REACT_APP_BASE_URL}/auth-user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(data => data.json())
            .then(data => {
                if(data) {
                    const userInfo = JSON.stringify({
                        id: encryptData(data._id),
                        name: data.name,
                        surname: data.surname,
                        email: data.email,
                        username: data.username,
                        bio: data.bio,
                        bannerProfileUrl: data.bannerProfileUrl,
                        avatarUser: data.avatarUser
                    });
                    localStorage.setItem('userInfo', userInfo);
                    setEmail('');
                    setPassword('');
                    navigate('/');
                }
            });
    }

    return (
        <div className="welcome-page">
            <div className="uk-text-center uk-grid">
                <div className="uk-width-expand@m uk-visible@m page-first-screen">
                    <div className="fl-hd-cover"></div>
                    <div className="uk-card  uk-card-body "></div>
                </div>
                <div className="uk-width-expand@m">
                    <div className="form-login">
                        {/* <div className="form-login__social">
                            <ul className="social">
                                <li><a href="http://www.google.com"><img src="fonts/google.svg" alt="google" /></a></li>
                                <li><a href="http://www.facebook.com"><img src="fonts/facebook.svg" alt="facebook" /></a></li>
                                <li><a href="http://www.twitter.com"><img src="fonts/twitter.svg" alt="twitter" /></a></li>
                            </ul>
                        </div> */}
                        <div className="form-login__box">
                            <div className="uk-heading-line uk-text-center"><span>Log in</span></div>
                            <form onSubmit={handleSubmit}>
                                <div className="uk-margin">
                                    <input 
                                        className="uk-input" 
                                        type="email" 
                                        placeholder="Email"
                                        value={email}
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="uk-margin">
                                    <input 
                                        className="uk-input" 
                                        type="password" 
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}  />
                                </div>
                                <div className="uk-margin">
                                    <button className="uk-button uk-button-danger uk-width-1-1" type="submit">Log In</button>
                                </div>
                                <div className="uk-margin uk-text-center"><a href="01_login-in.html">Forgotten password?</a></div>
                                <hr />
                                <div className="uk-text-center"><span>Don’t have an account?</span><Link className="uk-margin-small-left" to="/registration">Register</Link></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;