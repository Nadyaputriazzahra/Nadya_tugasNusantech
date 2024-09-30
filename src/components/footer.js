import React from 'react';

//import social data 
import {social} from '../data';

//import logo 
import logo from '../assets/img/logonad2.png';

const Footer = () => {
    return (
    <footer className='bg-tertiary py-12'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 items-center justify-between'>
                {/* social icons */}
                <div className='flex space-x-6 text-center justify-center'>
                    {social.map((item, index)=> {
                       const {href, icon} = item;
              return (
                <a
                  className='text-accent text-base'
                  href={href}  // Changed to dynamically use href variable
                  key={index}
                  target='_blank'  // Opens the link in a new tab
                  rel='noopener noreferrer'  // Security enhancement
                >
                  {icon}
                </a>
              );
                    })}
                </div>

                {/* logo */}
                <div>
                    <img src={logo} alt='' className="h-52" />
                </div>

                {/* copyright */}
                <p>&copy; 2024 Nadya putri azzahra </p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;