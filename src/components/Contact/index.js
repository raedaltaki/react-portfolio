import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Contact()
{   
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    
    function handleChange(e) 
    {
        if (e.target.name === 'email') 
        {
            const isValid = validateEmail(e.target.value);

            if (!isValid) 
            {
                setErrorMessage('Your email is invalid.');
            } 
            else 
            {
                setErrorMessage('');
            }
        }  
        else 
        {
            if (!e.target.value.length) 
            {
                setErrorMessage(`Your ${e.target.name} is required.`);
            } 
            else 
            {
                setErrorMessage('');
            }
        }

        if (!errorMessage) 
        {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) 
    {
        e.preventDefault();
        // console.log(formState);
    }
    return (
        <div>
            <br/>
            {/* <address className="d-flex justify-content-center align-items-center"> */}
            <address className="m-auto p-3">
                <div className="p-2 d-flex align-items-center">
                    <label className="label2">Email: </label>
                    <a className="btn op pl-5 ml-5 gold" href="mailto:raed.simon@gmail.com?subject=Email to Raed Altaki from portfolio" target="_blank" role="button">
                        raed.simon@gmail.com
                    </a>
                </div>
                <div className="p-2 d-flex align-items-center">
                    <label className="label2">LinkedIn:</label>
                    <a className="btn op pl-5 ml-5 gold" href="https://www.linkedin.com/in/raed-altaki/" target="_blank" role="button">
                        www.linkedin.com/in/raed-altaki/
                    </a>
                </div>
            </address>
            <br/>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" className="form-control" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" className="form-control" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="alert alert-warning">{errorMessage}</p>
                    </div>
                )}

                <button data-testid="buttontag" className="btn btn-lg btn-dark mb-2" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;