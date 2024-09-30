import React from 'react';

//import services data
import { services } from '../data';

const Services = () => {
    return (
        <section id='services' className='section bg-tertiary'>
            <div className='container mx-auto'>
                {/* section tite */}
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title'>Apa yang sudah bisa saya lakukan?
                    </h2>
                    <p className='subtitle'>Saya pasti bisa berkembang lagi,dan untuk sekarang saya sudah bisa membuat sebagai berikut
                    </p>
                </div>
                {/* item grid */}
                <div className='flex justify-center'>
                <div className='grid lg:grid-cols-4 gap-8'>
                    {services.map((services, index)=> {
                        const { icon, name, description} = services;
                        return <div className='bg-secondary p-6 rounded-2xl' key={index}>
                            {/* icon */}
                          <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]'>
                            {icon}</div>
                            <h2 className='text-xl font-medium mb-2'>{name}</h2> 
                            <p>{description}</p>
                        </div>
                    })}
                    </div>
                </div>
                </div>
                </section>
        );
};

export default Services;