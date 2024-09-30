import React from 'react';


//import components
import Projects from './projects';
import Skills from './skills';
// import {Portofolio} from '';

const Portofolio = () => {        
    return <section id='portfolio' className='section bg-primary min-h-[1400px] pt-16'>
        <div className='container mx-auto '>
        <Skills />
            <div className='flex flex-col items-center text-center mt-12'>
                <h2 className='section-title before:content-pengalaman relative before:absolute before:opacity-40 before:-top-[2rem] before:left-3/4 before:hidden before:lg:block'>
                Project saya</h2>
                <p className='subtitle'>
                    ini adalah project saya selama belajar pemrograman di sekolah </p>
            </div>
            <Projects />
        </div>
      
    </section>;
};

export default Portofolio;