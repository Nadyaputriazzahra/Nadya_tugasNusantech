import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll
import { Link as RouterLink } from "react-router-dom"; // Import from react-router-dom

const Nav = () => {
    return (
        <nav>
            <ul className='flex space-x-10 cap capitalize text-[15px]'>
                {/* Links for scrolling to sections */}
                {['home', 'about','portofolio', 'services', 'overview', 'contact'].map((item) => (
                    <li className='text-white hover:text-accent cursor-pointer' key={item}>
                        <ScrollLink 
                            to={item} // The id of the section
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70} // Adjust if you have a fixed header
                            className='transition-all duration-300'
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)} {/* Capitalize first letter */}
                        </ScrollLink>
                    </li>
                ))}
                {/* Add Login button using react-router-dom Link */}
                <li className='text-white cursor-pointer'>
                    <RouterLink 
                        to="/login" 
                        className="bg-blue-500 px-4 py-2 rounded transition-all duration-300 hover:bg-blue-600"
                    >
                        Login
                    </RouterLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
