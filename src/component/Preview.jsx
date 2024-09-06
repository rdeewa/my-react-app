import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Backbtn from './Backbtn';

const Preview = () => {
    return (
        <>
            <div className="header">
            <Backbtn />
                <h3>UI/UX Design</h3>
                <p>Basic fundamental of Ui/Ux.</p>
                <div className="det">
                    <div className="det1">
                        <box-icon name='time-five' ></box-icon><span>3h 20min</span>
                    </div>
                    <div className="det1">
                        <box-icon name='playlist' type='solid' ></box-icon><span>10 Chep</span>
                    </div>
                </div>
            </div>
            <h5 className="title">Course Content:-</h5>

            <div class="cen">
                <div class="col-12 cen">
                    <div class="course-content">
                        <Link to={'/vidcontent'} className="">
                            <div class="course-item">
                                <div class="course-item-number">01</div>
                                <div class="course-item-title">Welcome to the Course</div>
                                <div class="course-item-time">5:35 mins</div>
                                <box-icon name='play-circle' ></box-icon>
                            </div>
                        </Link>
                        <div class="course-item">
                            <div class="course-item-number">02</div>
                            <div class="course-item-title">Design Thinking - Intro</div>
                            <div class="course-item-time">19:04 mins</div>
                            <box-icon name='play-circle' ></box-icon>
                        </div>
                        <div class="course-item">
                            <div class="course-item-number">03</div>
                            <div class="course-item-title">Design Thinking Process</div>
                            <div class="course-item-time">12:48 mins</div>
                            <box-icon name='play-circle' ></box-icon>
                        </div>
                        <div class="course-item">
                            <div class="course-item-number">04</div>
                            <div class="course-item-title">Customer Perspective</div>
                            <div class="course-item-time">37:54 mins</div>
                            <box-icon name='play-circle' ></box-icon>
                        </div>
                        <div class="course-item">
                            <div class="course-item-number">05</div>
                            <div class="course-item-title">Designing User Interfaces</div>
                            <div class="course-item-time">26:35 mins</div>
                            <box-icon name='play-circle' ></box-icon>
                        </div>
                        <div class="course-item">
                            <div class="course-item-number">06</div>
                            <div class="course-item-title">Designing User Interfaces</div>
                            <div class="course-item-time">26:35 mins</div>
                            <box-icon name='play-circle' ></box-icon>
                        </div>
                        <div class="course-item">
                            <div class="course-item-number">07</div>
                            <div class="course-item-title">Designing User Interfaces</div>
                            <div class="course-item-time">26:35 mins</div>
                            <box-icon name='play-circle' ></box-icon>
                        </div>
                        <div class="course-item">
                            <div class="course-item-number">08</div>
                            <div class="course-item-title">Designing User Interfaces</div>
                            <div class="course-item-time">26:35 mins</div>
                            <box-icon name='play-circle' ></box-icon>
                        </div>
                        <div class="course-item">
                            <div class="course-item-number">09</div>
                            <div class="course-item-title">Designing User Interfaces</div>
                            <div class="course-item-time">26:35 mins</div>
                            <box-icon name='play-circle' ></box-icon>
                        </div>
                        <div class="course-item">
                            <div class="course-item-number">10</div>
                            <div class="course-item-title">Designing User Interfaces</div>
                            <div class="course-item-time">26:35 mins</div>
                            <box-icon name='play-circle' ></box-icon>
                        </div>
                    </div>
                    <button class="get-course-button">Get This Course</button>
                </div>
            </div>
        </>


    );
}



export default Preview