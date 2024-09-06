import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import logo from './asset/dd.jpg';

const Profile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        mobile: '',
        dob: '',
        gender: '',
    });

    useEffect(() => {
        const storedData = localStorage.getItem('userProfile');
        if (storedData) {
            setUserData(JSON.parse(storedData));
        }
    }, []);

    const goBack = () => {
        navigate(-1);
    };

    const handleLogout = () => {
        // Handle logout logic here
        console.log('Logout clicked');
    };

    return (
        <>
            <div className="profile-edit-container">
                <div className="profile-container d-flex flex-column align-items-center">
                    <div className="profile-back w-100 d-flex justify-content-between align-items-center">
                        <Link onClick={goBack} className="text-white">
                            <box-icon name='left-arrow-circle' color="#fff" size="lg"></box-icon>
                        </Link>
                        <div className="log-out">
                            <box-icon size='md' name='log-in-circle'  color="#fff" ></box-icon>
                        </div>
                        {/* <h3 className="profile-logo text-white">Log-Out</h3> */}
                    </div>
                </div>
                <div className="profile-header position-relative">
                    <img src={logo} alt="Profile Picture" className="img-fluid rounded-circle" />
                    {/* <span className="edit-icon position-absolute bottom-0 end-0">
                        <box-icon name="edit-alt" color="#007bff" size="sm"></box-icon>
                    </span> */}
                </div>

                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={userData.name}
                        InputProps={{ readOnly: true }}
                        className='TextField'
                        sx={{
                            '& label': {
                                fontWeight: 'bold',
                                fontSize: '0.9rem'
                            },
                            '& input': {
                                fontWeight: 'bold'
                            }
                        }}
                    />
                    <TextField
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={userData.email}
                        InputProps={{ readOnly: true }}
                        className='TextField'
                        sx={{
                            '& label': {
                                fontWeight: 'bold',
                                fontSize: '0.9rem'
                            },
                            '& input': {
                                fontWeight: 'bold'
                            }
                        }}
                    />
                    <TextField
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={userData.mobile}
                        InputProps={{ readOnly: true }}
                        className='TextField'
                        sx={{
                            '& label': {
                                fontWeight: 'bold',
                                fontSize: '0.9rem'
                            },
                            '& input': {
                                fontWeight: 'bold'
                            }
                        }}
                    />
                    <TextField
                        label="Date of Birth"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={userData.dob}
                        InputProps={{ readOnly: true }}
                        className='TextField'
                        sx={{
                            '& label': {
                                fontWeight: 'bold',
                                fontSize: '0.9rem'
                            },
                            '& input': {
                                fontWeight: 'bold'
                            }
                        }}
                    />

                    <FormControl fullWidth margin="normal">
                        <InputLabel sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Gender</InputLabel>
                        <Select
                            value={userData.gender}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Gender' }}
                            className='TextField'
                            readOnly
                            sx={{ '& .MuiSelect-select': { fontWeight: 'bold' } }}
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </Select>
                    </FormControl>

                    <Box display="flex" justifyContent="flex-end" mt={3}>
                        
                        <Button variant="contained" color="secondary">
                            Save Changes
                        </Button>
                    </Box>
                </Box>
            </div>

            <div className="footer">
                <Link to={'/Home'}><box-icon name="home"></box-icon></Link>
                <Link to={'/Allcourse'}><box-icon type="solid" name="book-reader"></box-icon></Link>
                <Link to={'/Mycourse'}><box-icon name="book-open"></box-icon></Link>
                <Link to={'/Profile'}><box-icon name="user"></box-icon></Link>
            </div>
        </>
    );
};

export default Profile;
