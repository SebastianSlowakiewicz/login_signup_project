import React, { useState } from "react";
import './LoginSignup.css';

import user_icon from '../assets/circle-user-solid.svg';
import email_icon from '../assets/envelope-solid.svg';
import password_icon from '../assets/key-solid.svg';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (action === "Login") {
            if (!formData.email || !formData.password) {
                setMessage("Uzupełnij email i hasło.");
                return;
            }
            console.log(`Zalogowano użytkownika: ${formData.email}`);
            setMessage(`Zalogowano jako: ${formData.email}`);
        } else {
            if (!formData.name || !formData.email || !formData.password) {
                setMessage("Uzupełnij wszystkie pola: imię, email i hasło.");
                return;
            }
            console.log(`Zarejestrowano użytkownika: ${formData.name}, ${formData.email}`);
            setMessage(`Zarejestrowano użytkownika: ${formData.name}`);
        }
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action === "Login" ? null : (
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                )}

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Id"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {action === "Sign Up" ? null : (
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            )}

            <div className="submit-container">
                <div
                    className={action === "Login" ? "submit gray" : "submit"}
                    onClick={() => {
                        if (action === "Sign Up") {
                            handleSubmit();
                        } else {
                            setAction("Sign Up");
                            setMessage('');
                            setFormData({ name: '', email: '', password: '' });
                        }
                    }}
                >
                    Sign Up
                </div>

                <div
                    className={action === "Sign Up" ? "submit gray" : "submit"}
                    onClick={() => {
                        if (action === "Login") {
                            handleSubmit();
                        } else {
                            setAction("Login");
                            setMessage('');
                            setFormData({ name: '', email: '', password: '' });
                        }
                    }}
                >
                    Login
                </div>
            </div>

            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default LoginSignup;
