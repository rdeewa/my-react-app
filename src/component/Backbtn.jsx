import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Backbtn = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="course-header">
            <div onClick={goBack} className="back-button">
                <box-icon name='left-arrow-circle'></box-icon>
            </div>
            <h2 className="course-title">Logo</h2>
        </div>
    );
};

export default Backbtn;
