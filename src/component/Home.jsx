import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from './asset/dd.jpg';
import { BASE_URL } from './BASE_URL';
const Home = () => {

    const [data, setData] = useState([])

    async function getcourse() {
        axios.get(`${BASE_URL}/courses`)
            .then((res) => {
                console.log(res.data);
                setData(res.data)

                
            })
    }

    useEffect(() => {
        getcourse()
    }, [])
    return (
        <>

            <div className="header">
                <h2>Hi, Deewa...</h2>
                <p>What do you want to learn?</p>
                <div className="search-bar">
                    <box-icon name='search'></box-icon>
                    <input type="text" placeholder="Search Now" />
                </div>
            </div>

            <div className='cont'>
                <div className="row home-d">
                    {data.map((item) => {
                        return (
                            <Link to={'/preview'} className="category-card col-6" style={{background:"#ffd37a"}}>
                                <div className='home-card p-2' style={{background :"#fff" ,border :"1px solid black" , borderRadius :"10px"}}>
                                    <img src={logo} alt="UI/UX Design" />
                                    <p>{item.title}<br /><small>{item.chapters} Chapter</small></p>
                                </div>
                            </Link>
                        )

                    })}
                </div>

    

            </div >

            <div className="footer">
                <Link to={'/Home'} className=""><box-icon name='home'></box-icon></Link>
                <Link to={'/Allcourse'} className=""><box-icon type='solid' name='book-reader'></box-icon></Link>
                <Link to={'/Mycourse'} className=""><box-icon name='book-open' ></box-icon></Link>
                <Link to={'/Profile'} className=""><box-icon name='user'></box-icon></Link>
            </div>

        </>
    );
}

export default Home;
