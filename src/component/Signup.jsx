import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import md5 from 'js-md5';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Authenticate.css';
import { BASE_URL } from './BASE_URL';

const Signup = () => {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        gender: '',
        dob: '',
    });

    const handleSignupClick = () => {
        setIsLoginActive(false);
    };

    const handleLoginClick = () => {
        setIsLoginActive(true);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitsign = (e) => {
        e.preventDefault();

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        var pass = md5(formData.password)

        const data = {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            gender: formData.gender,
            dob: formData.dob,
            password: pass,
        };

        // Save signup data in localStorage
        localStorage.setItem('userProfile', JSON.stringify(data));

        // alert('User registered successfully. Data saved in local storage.');

       

        setIsLoginActive(true);

        axios.post(`http://localhost:8001/signup`, data)
            .then(response => {
                alert('User registered successfully. Please log in.');
                // navigate('/login');

                setIsLoginActive(true);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const pass = md5(formData.password)

        const data = {
            email: formData.email,
            password: pass,
        };

        axios.post(`${BASE_URL}/login`, data)
            .then(response => {
                if (response.data[0].id) {
                    alert('Login successful');
                    navigate('/Home');
                } else {
                    alert('Invalid credentials');
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="bodys">
            <div className="back w-100">
                <Link onClick={goBack} className="text-black">
                    <box-icon name='left-arrow-circle' color="#000000" size="lg"></box-icon>
                </Link>
                <h2 className="profile-logo text-black">Logo</h2>
            </div>
            <div className="wrapper">
                <div className="title-text">
                    <div className={`title ${isLoginActive ? 'login' : 'signup'}`}>
                        {isLoginActive ? 'Login Form' : 'Signup Form'}
                    </div>
                </div>
                <div className="form-container">
                    <div className="slide-controls">
                        <input type="radio" name="slide" id="login" checked={isLoginActive} readOnly />
                        <input type="radio" name="slide" id="signup" checked={!isLoginActive} readOnly />
                        <label htmlFor="login" className="slide login" onClick={handleLoginClick}>
                            Login
                        </label>
                        <label htmlFor="signup" className="slide signup" onClick={handleSignupClick}>
                            Signup
                        </label>
                        <div className="slider-tab"></div>
                    </div>

                    <div className="form-inner">
                        <form onSubmit={handleSubmit} className={isLoginActive ? '' : 'd-none'}>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <a href="#">Forgot password?</a>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <form onSubmit={handleSubmitsign} className={isLoginActive ? 'd-none' : ''}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Full Name"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="tel"
                                    name="mobile"
                                    className="form-control"
                                    placeholder="Mobile Number"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="date"
                                    name="dob"
                                    className="form-control"
                                    placeholder="Date of Birth"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <select
                                    name="gender"
                                    className="form-select"
                                    required
                                    onChange={handleChange}
                                >
                                    <option value="" >Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
