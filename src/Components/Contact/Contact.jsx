import React from 'react';
import { Link } from 'react-router';

const Contact = () => {
    return (
        <div className='mb-20 pt-20'>
            <img src="https://i.imgur.com/xdpDnXf.png" alt="" className='mx-auto w-100 h-80' />
            <h1 className='font-bold text-red-500 text-4xl text-center mb-4'>404 - Page not Found!!</h1>
            <p className='font bold text-xl  text-black text-center'>Oops! The page you're looking for doesn't exist</p>
            <div className='flex justify-center items-center'>
                <Link to="/">
                <button className='btn btn-success mt-6'>Return to Home Page</button></Link>
               
            </div>
            
        </div>
    );
};

export default Contact;