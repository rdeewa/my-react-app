import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import img from './asset/in.png';
import axios from 'axios';
import { BASE_URL } from './BASE_URL';


const Mycourse = () => {

    const [data, setData] = useState([]);

    async function getmycourse() {
        try {
            const res = await axios.get(`${BASE_URL}/mycourse`);
            console.log(res.data);
            setData(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getmycourse();
    }, []);

    return (
        <>
            <div className="mycouurse-cont">
                <div className="py-3">
                    <h2 className="head">My courses</h2>
                </div>

                <div className="category-buttons ">
                    <button className="active">My</button>
                    {/* <button>Downloaded</button> */}
                    <button>Archived</button>
                    <button>Favorite</button>
                </div>
                {data.map((item) => {
                    return (
                        <div className="course-item">
                            <div className="d-flex align-items-center">
                                <img src={img} alt="course image" className="course-img me-3" />
                                <div>
                                    <div className="title">{item.title}</div>
                                    <smmy>{item.description}</smmy>
                                </div>
                            </div>

                            <div><Link to="/vidcontent" className="start-course">{item.chapters}</Link></div>
                        </div>
                    )
                })}


                {/* <div className="course-item">
                    <div className="d-flex align-items-center">
                        <img src={img} alt="course image" className="course-img me-3" />
                        <div>
                            <div className="title">PHP Laravel: Build Amazing Restaurant Management System</div>
                            <smmy>Course Name title</smmy>
                        </div>
                    </div>
                    <div><Link to="/vidcontent" className="start-course">Start Course</Link></div>
                </div>

                <div className="course-item">
                    <div className="d-flex align-items-center">
                        <img src={img} alt="course image" className="course-img me-3" />
                        <div>
                            <div className="title">PHP Laravel: Build Travel Agency Management System</div>
                            <smmy>Course Name title</smmy>
                        </div>
                    </div>
                    <div><Link to="/vidcontent" className="start-course">Start Course</Link></div>
                </div>

                <div className="course-item">
                    <div className="d-flex align-items-center">
                        <img src={img} alt="course image" className="course-img me-3" />
                        <div>
                            <div className="title">Flipkart Review Sentiment Analysis & Spam Comments Detection</div>
                            <smmy>Course Name title</smmy>
                        </div>
                    </div>
                    <div><Link to="/vidcontent" className="start-course">Start Course</Link></div>
                </div> */}

            </div>
            <div className="footer">
                <Link to={'/Home'} className=""><box-icon name='home'></box-icon></Link>
                <Link to={'/mycourse'} className=""><box-icon type='solid' name='book-reader'></box-icon></Link>
                <Link to={'/Mycourse'} className=""><box-icon name='book-open' ></box-icon></Link>
                <Link to={'/Profile'} className=""><box-icon name='user'></box-icon></Link>
            </div>
        </>
    )
}

export default Mycourse