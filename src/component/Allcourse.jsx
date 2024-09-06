import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from './asset/dd.jpg';
import img from './asset/in.png';
import { BASE_URL } from './BASE_URL';


const Allcourse = () => {

    const [data, setData] = useState([]);

    async function getallcourse() {
        try {
            const res = await axios.get(`${BASE_URL}/allcourse`);
            console.log(res.data);
            setData(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getallcourse();
    }, []);

    return (
        <>
            <div className="color">
                <div className="cont">
                    <h5 className="category-title">All Courses</h5>
                    {data.map((item) => {
                        return (
                            <div className="recommended-card d-flex align-items-center">
                                <img src={logo} alt="Course 1" className="img-fluid" />
                                <div className="course-info">
                                    <p>{item.title}</p>
                                    <small>{item.description}</small><br />
                                    <small>{item.chapters}</small>
                                </div>
                            </div>
                        )
                    })}

                    <div className="recommended-card d-flex align-items-center">
                        <img src={logo} alt="Course 2" className="img-fluid" />
                        <div className="course-info">
                            <p>Graphic Design</p>
                            <small>Deewa, Product Design</small><br />
                            <small>3h 20min</small>
                        </div>
                    </div>
                    <div className="recommended-card d-flex align-items-center">
                        <img src={logo} alt="Course 1" className="img-fluid" />
                        <div className="course-info">
                            <p>UI/UX Design</p>
                            <small>Deewa, Product Design</small><br />
                            <small>2h 10min</small>
                        </div>
                    </div>
                    <div className="recommended-card d-flex align-items-center">
                        <img src={logo} alt="Course 2" className="img-fluid" />
                        <div className="course-info">
                            <p>Graphic Design</p>
                            <small>Deewa, Product Design</small><br />
                            <small>3h 20min</small>
                        </div>
                    </div>
                    <div className="recommended-card d-flex align-items-center">
                        <img src={logo} alt="Course 1" className="img-fluid" />
                        <div className="course-info">
                            <p>UI/UX Design</p>
                            <small>Deewa, Product Design</small><br />
                            <small>2h 10min</small>
                        </div>
                    </div>
                    <div className="recommended-card d-flex align-items-center">
                        <img src={logo} alt="Course 2" className="img-fluid" />
                        <div className="course-info">
                            <p>Graphic Design</p>
                            <small>Deewa, Product Design</small><br />
                            <small>3h 20min</small>
                        </div>
                    </div>


                    <h5 className="recommended-title">Recommended Course</h5>
                    <div className="d-flex justify-content-between flex-wrap">
                        <Link to={'/preview'} className="category-card">
                            <div>
                                <img src={img} alt="Course Name" />
                                <p>Course Name<br /><small>27 Chapter</small></p>
                            </div>
                        </Link>
                        <div className="category-card">
                            <img src={img} alt="Course Name" />
                            <p>Course Name<br /><small>27 Chapter</small></p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap">
                        <div className="category-card">
                            <img src={img} alt="Course Name" />
                            <p>Course Name<br /><small>27 Chapter</small></p>
                        </div>
                        <div className="category-card">
                            <img src={img} alt="Course Name" />
                            <p>Course Name<br /><small>27 Chapter</small></p>
                        </div>
                    </div>
                </div >
            </div>

            <div className="footer">
                <Link to={'/Home'} className=""><box-icon name='home'></box-icon></Link>
                <Link to={'/Allcourse'} className=""><box-icon type='solid' name='book-reader'></box-icon></Link>
                <Link to={'/Mycourse'} className=""><box-icon name='book-open' ></box-icon></Link>
                <Link to={'/Profile'} className=""><box-icon name='user'></box-icon></Link>
            </div>

        </>
    );
}

export default Allcourse;
