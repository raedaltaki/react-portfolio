import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Footer()
{   
    return (
        <footer className=" text-center text-dark">
            <div className="container p-4">
            <section className="mb-4">
                <a className="btn btn-outline-dark btn-lg btn-floating m-1" href="https://github.com/raedaltaki" target="_blank" role="button">
                    <i className="fab fa-github" ></i>
                </a>

                <a className="btn btn-outline-dark btn-lg btn-floating m-1" href="https://www.linkedin.com/in/raed-altaki/" target="_blank" role="button">
                    <i className="fab fa-linkedin-in"></i>
                </a>

                <a className=" btn btn-outline-dark btn-lg btn-floating m-1" href="https://stackexchange.com/users/19916887/raedaltaki" target="_blank" role="button">
                    <i className="fab fa-stack-overflow"></i>
                </a>
            </section>
            </div>
        </footer>
    );
};

export default Footer;