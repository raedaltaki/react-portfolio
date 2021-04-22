import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Portfolio()
{   
    return (
        <div className="row m-1">

          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">

            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/date-concierge.gif`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>Date Concierge </h3>
                <a href="https://projectoneteamfour.github.io/date-concierge/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/raedaltaki/date-concierge" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>
            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/note-taker.gif`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>Note Taker</h3>
                <a href="https://protected-woodland-36311.herokuapp.com/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/raedaltaki/note-taker" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>

          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/taskmaster-pro.gif`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>Taskmaster Pro</h3>
                <a href="https://raedaltaki.github.io/taskmaster-pro/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/raedaltaki/taskmaster-pro" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>
            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/run-buddy.JPG`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>Run Buddy</h3>
                <a href="https://raedaltaki.github.io/run-buddy/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/raedaltaki/run-buddy" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>


          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">

            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/truevia-game.gif`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>Truevia Game</h3>
                <a href="https://mysterious-coast-93940.herokuapp.com/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/Group3bootcamp/Truevia-Game" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>
            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/weather-dashboard.gif`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>Weather Dashboard</h3>
                <a href="https://raedaltaki.github.io/weather-dashboard/index.html" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/raedaltaki/weather-dashboard" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>
            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/CMS-BLOG-SITE.gif`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>CMS BLOG SITE</h3>
                <a href="https://pacific-ridge-94439.herokuapp.com/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/raedaltaki/CMS-blog-site" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>


          </div>
        </div>
    );
};

export default Portfolio;