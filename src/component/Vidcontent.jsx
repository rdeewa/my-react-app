import React, { useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Backbtn from './Backbtn';

const Vidcontent = () => {

  useEffect(() => {
    const tabs = document.querySelectorAll('.nav-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
      tab.addEventListener('click', function (event) {
        event.preventDefault();

        // Remove 'active' class from all tabs and tab panes
        tabs.forEach(t => t.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active', 'show'));

        // Add 'active' class to the clicked tab and corresponding tab pane
        this.classList.add('active');
        const targetPane = document.querySelector(this.getAttribute('href'));
        targetPane.classList.add('active', 'show');
      });
    });

    // Cleanup to remove event listeners when component is unmounted
    return () => {
      tabs.forEach(tab => {
        tab.removeEventListener('click', function () { });
      });
    };
  }, []);

  return (
    <>
      <div className="color">
        <div className="conts pt-3">
        <Backbtn />
          <div className="video-frame">
            <iframe
              width="100%"
              className=''
              height="100%"
              src="https://www.youtube.com/embed/1GWyCJHuNms?si=mKj09W8VqK90nco_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          {/* <h3 style={{ fontSize: '18px' }}>Lesson 1: Welcome to the Course</h3> */}
          <div className="cont mt-3">
            <div className="course-items" onClick={() => window.location.href = '#'}>
              <div className="left"><box-icon name='chevron-left'></box-icon></div>
              <div className="course-item-number">01</div>
              <div>
                <div className="course-item-title">Welcome to the Course</div>
                <div className="course-item-time">5:35 mins</div>
              </div>
              <div className="right"><box-icon name='chevron-right' ></box-icon></div>
            </div>
          </div>

          <div className="description-box">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" href="#description">Description</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#note">Note</a>
              </li>
            </ul>

            <div className="tab-content">
              <div id="description" className="tab-pane active show"><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia consequatur, provident voluptate impedit deserunt consequuntur eveniet assumenda similique sed illo. Cupiditate quas accusamus dicta magni minus distinctio, corrupti unde.</p>
                <p>Duration: 5:35 mins</p>
              </div>
              <div id="note" className="tab-pane fade"><br />
                <p>Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corporis dolorem earum aperiam eos! Animi excepturi natus qui perferendis ipsam ab! Quidem perferendis mollitia asperiores deleniti, veniam consequuntur aliquam tempore..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vidcontent;
