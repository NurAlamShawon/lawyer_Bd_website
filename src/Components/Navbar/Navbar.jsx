import React from 'react';
import { Link, NavLink } from 'react-router';
import "./navbar.css"


const Navbar = () => {
    return (
        <div className="navbar mb-10 max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"} className='rounded-none'>
                 Home
                </NavLink>
              </li>
              <li >
                <NavLink to={"booking"} className='rounded-none'>
                  
                My-Bookings
                 
                </NavLink>
              </li>
              <li>
                <NavLink to={"blog"} className='rounded-none'>
                  
                Blogs
                 
                </NavLink>
              </li>
              <li> 
                <NavLink to={"contact-us"} className='rounded-none'>
                  
                Contact Us
                 
                </NavLink>
              </li>
              
            </ul>
          </div>
          <div className='flex justify-around'>
         
         <img src="https://i.imgur.com/lH6daqd.png" alt="" className='w-10 h-10'/>
          <a className=" btn-ghost font-extrabold text-3xl">Law.BD</a>
          </div>
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
                <NavLink to={"/"} className='mr-3 rounded-none'>
                 Home
                </NavLink>
              </li>
              <li >
                <NavLink to={"booking"} className="mr-3  rounded-none">
                  
                My-Bookings
                 
                </NavLink>
              </li>
              <li >
                <NavLink to={"blog"} className=" mr-3 rounded-none">
                  
                Blogs
                 
                </NavLink>
              </li>
              <li >
                <NavLink to={"contact-us"} className=" mr-3 rounded-none">
                  
                Contact Us
                 
                </NavLink>
              </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="contact-us">
          <button className="btn btn-success rounded-4xl text-white">Contact Now</button>
          </Link>
          
        </div>
      </div>
    );
};

export default Navbar;