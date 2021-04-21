import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Portfolio()
{   
    return (
        <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img
                    src={require(`../../assets/photos/date-concierge.gif`).default}
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                />
            </div>
        
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img
                    src={require(`../../assets/photos/truevia-game.gif`).default}
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                />
            </div>
        
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img
                    src={require(`../../assets/photos/CMS-BLOG-SITE.gif`).default}
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Portfolio;