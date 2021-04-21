import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Contact()
{   
    return (
        <div>
            <h2>Contact me</h2>
            <form>
            `   <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" />
                </div>

                <button data-testid="buttontag" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;