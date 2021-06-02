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
                <p>A web application that will plan a suitable date in your city based on weather condition and your mood.</p>
                <h5>Tools & technologies</h5>
                <p>HTML5 <span>-</span> CSS3 <span>-</span> JavaScript <span>-</span> AJAX <span>-</span> JQuery <span>-</span> MaterializeCSS3 <span>-</span> MomentJS</p>
                <a href="https://projectoneteamfour.github.io/date-concierge/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/raedaltaki/date-concierge" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>
            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/taskmaster-pro.gif`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>Taskmaster Pro</h3>
                <p>A task managment Application that will help you organize your tasks based on their status.</p>
                <h5>Tools & technologies</h5>
                <p> HTML5 <span>-</span> CSS3 <span>-</span> JQuery <span>-</span> JQueryUI <span>-</span> Bootstrap <span>-</span> MomentJS </p>
                <a href="https://raedaltaki.github.io/taskmaster-pro/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/raedaltaki/taskmaster-pro" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>
            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/shop-shop-03.gif`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>Shop-Shop-app</h3>
                <p>Shop-Shop App is an e-commerce website that allows you to buy your needs from home</p>
                <h5>Tools & technologies</h5>
                <p> MERN <span>-</span> React <span>-</span> Redux <span>-</span> NodeJs <span>-</span> Express <span>-</span> MongoDB <span>-</span> mongoose <span>-</span> Apollo <span>-</span> GraphQL <span>-</span> JWT <span>-</span> bcrypt <span>-</span> Stripe <span>-</span> PWA </p>
                <a href="https://enigmatic-oasis-06947.herokuapp.com/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/raedaltaki/shop-shop" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>
            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/photo-port.gif`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>photo-port</h3>
                <p>Photo Port is a MERN photo galley website for a photographer that display all the photos based on their categories</p>
                <h5>Tools & technologies</h5>
                <p> React <span>-</span> CSS3 </p>
                <a href="https://raedaltaki.github.io/photo-port/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/raedaltaki/photo-port" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>
            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/run-buddy.JPG`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>Run Buddy</h3>
                <p>Gym and fitness website that display gym details like personal trainers and the subscription cost</p>
                <h5>Tools & technologies</h5>
                <p> HTML5 <span>-</span> CSS3 </p>
                <a href="https://raedaltaki.github.io/run-buddy/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/raedaltaki/run-buddy" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
          <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/currenseed.png`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>CurrenSeed</h3>
                <p>Online farmer’s market which providing easy platform to buy and sell fresh produce and other items locally</p>
                <h5>Tools & technologies</h5>
                <p> MERN <span>-</span> React <span>-</span> Redux <span>-</span> Chakra-ui <span>-</span> NodeJs <span>-</span> Express <span>-</span> MongoDB <span>-</span> mongoose <span>-</span> Apollo <span>-</span> GraphQL <span>-</span> JWT <span>-</span> bcrypt <span>-</span> Stripe <span>-</span> PWA </p>
                <a href="https://currenseed.herokuapp.com/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/DJ-KARMA/currenseed/" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>
            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/deep-thoughts.png`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>Deep Thoughts</h3>
                <p>A social media application where users can create an account, post their thoughts for others to see, and interact with other users through these thoughts</p>
                <h5>Tools & technologies</h5>
                <p> MERN <span>-</span> React <span>-</span> NodeJs <span>-</span> Express <span>-</span> MongoDB <span>-</span> mongoose <span>-</span> Apollo <span>-</span> GraphQL <span>-</span> JWT <span>-</span> bcrypt </p>
                <a href="https://infinite-ocean-95793.herokuapp.com/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/raedaltaki/deep-thoughts" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>

            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/googlebooks-app-01.gif`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>googlebooks</h3>
                <p> Web Applicstion which helps users searching for new books to read and keep a list of books to purchase</p>
                <h5>Tools & technologies</h5>
                <p> MERN <span>-</span> React <span>-</span> NodeJs <span>-</span> Express <span>-</span> MongoDB <span>-</span> mongoose <span>-</span> Apollo <span>-</span> GraphQL <span>-</span> JWT <span>-</span> bcrypt <span>-</span> RESTfull API </p>
                <a href="https://radiant-scrubland-61432.herokuapp.com/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/raedaltaki/googlebooks-app" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>
            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/git-it-done.gif`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>Git it done</h3>
                <p> Web Applicstion that allows users to search for GitHub users' profiles and view their open source projects and tasks</p>
                <h5>Tools & technologies</h5>
                <p> HTML5 <span>-</span> CSS3 <span>-</span> AJAX <span>-</span> RESTfull API</p>
                <a href="https://raedaltaki.github.io/git-it-done/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/raedaltaki/git-it-done" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>

          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">

            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/truevia-game.gif`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>Truevia Game</h3>
                <p>A Truevia game where users can test their knowledge in many categories and difficulties then compare and comment on other players scores</p>
                <h5>Tools & technologies</h5>
                <p> NodeJs <span>-</span> Express <span>-</span> MySQL <span>-</span> Sequelize <span>-</span> Jest <span>-</span> express-session <span>-</span> nodemailer <span>-</span> AJAX <span>-</span> RESTfull API <span>-</span> TDD <span>-</span> ORM</p>
                <a href="https://mysterious-coast-93940.herokuapp.com/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/Group3bootcamp/Truevia-Game" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>
            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/weather-dashboard.gif`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>Weather Dashboard</h3>
                <p>A weather Dashboard application that helps you get weather forecast for your city</p>
                <h5>Tools & technologies</h5>
                <p> HTML5 <span>-</span> CSS3 <span>-</span> JavaScript <span>-</span> AJAX <span>-</span> Bootstrap <span>-</span> MomentJS </p>
                <a href="https://raedaltaki.github.io/weather-dashboard/index.HTML5" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/raedaltaki/weather-dashboard" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>
            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/CMS-BLOG-SITE.gif`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>CMS BLOG SITE</h3>
                <p>CMS-style blog website that allows publishing articles, blog posts, thoughts and opinions</p>
                <h5>Tools & technologies</h5>
                <p> NodeJs <span>-</span> Express <span>-</span> MySQL <span>-</span> Sequelize <span>-</span> express-session <span>-</span> AJAX <span>-</span> RESTfull API <span>-</span> ORM </p>
                <a href="https://pacific-ridge-94439.herokuapp.com/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/raedaltaki/CMS-blog-site" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>
            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/budget_tracker.jpg`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>Budget Tracker</h3>
                <p>A web application that helps you tracking your withdrawals and deposits with or without a data/internet connection SO THAT your account balance is accurate when you are traveling</p>
                <h5>Tools & technologies</h5>
                <p> NodeJs <span>-</span> Express <span>-</span> MongoDB <span>-</span> mongoose <span>-</span> ODM <span>-</span> PWA </p>
                <a href="https://rocky-retreat-60179.herokuapp.com/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/raedaltaki/Budget-Tracker" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>
            <div className="content w-100 shadow-1-strong rounded mb-4">
              <div className="content-overlay"></div>
              <img className="content-image" src={require(`../../assets/photos/pizza-hunt.png`).default} alt=""/>
              <div className="content-details fadeIn-right">
                <h3>Pizza hunt</h3>
                <p>A web application where users can share and discuss their dream pizza-topping combinations</p>
                <h5>Tools & technologies</h5>
                <p> NodeJs <span>-</span> Express <span>-</span> MongoDB <span>-</span> mongoose <span>-</span> ODM <span>-</span> RESTfull API </p>
                <a href="https://ancient-caverns-88960.herokuapp.com/" target="_blank" className="m-3"><i className="far fa-eye"></i></a>
                <a href="https://github.com/raedaltaki/food-festival" target="_blank" className="m-3"><i className="fab fa-github" ></i></a>
              </div>
            </div>

          </div>
        </div>
    );
};

export default Portfolio;
