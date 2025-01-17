import React from 'react';

//import woman image
import womanImg from '../assets/img/item3.png';

const Hero = () => {
    return (
         <section id='home' className='lg:h-[120vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
        <div className='container mx-auto h-full'>
            <div className="flex items-center h-full pt-8">
                {/* left side */}
                <div className='flex-1 flex flex-col items-center lg:items-start'>
                    <p className='text-lg text-accent mb-[22px]'>Hallo perkenalkan saya  </p>
                    <h1 className='text-4xl leading-[44px] md:text-5x1 md:leading-tight lg:text-7x1 lg:leading-[1.2] font-bold md:tracking-[-2px]'>
                       Nadya Putri Azzahra  <br />please suport me okay?</h1>
                        <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
                            saya adalah siswi kelas 12 rpl rekayasa perangkat lunak di smk muhammadiyah 4 sukorejo, saya membuat cv sebagai pusat informasi tentang diri saya
                            </p>
                            <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'>Work with me</button>
                </div>
                {/* right side */}
                <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
                    <img src={womanImg} all=''></img>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Hero;