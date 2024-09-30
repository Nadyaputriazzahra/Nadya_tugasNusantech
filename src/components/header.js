import React, {useState,useEffect } from "react";

//import components
import Logo from '../assets/img/logonad2.png';
import Nav from '../components/nav';
import Socials from '../components/socials';

const Header = () => {
    const [bg, setBg] = useState(false);

    useEffect(()=> {
       window.addEventListener('scroll', ()=> {
        return window.scrollY > 50 ? setBg(true) : setBg 
        (false);
       });
    });

    return ( 
    <header className={`${bg ? 'bg-tertiary h-20':'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
        <div className='container mx-auto h-full flex items-center justify-between'>
        {/* {logo} */}
        <a href="#">
            <img src={Logo} alt='' className="h-64" />
        </a>
       {/* {nav} */}
       <div className='hidden lg:block'>
        <Nav />
       </div>
    
       {/* {Socials} */}
       {/* <div className='hidden lg:block'>
       <Socials />
        </div>  */}
        </div>  
    </header>
    );
};

export default Header;