import React from 'react';

//import skill data
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        {/* Container to hold the title on the left and skills on the right */}
        <div className='flex flex-col lg:flex-row justify-between items-start'>
          
          {/* Left Section: Title and Description */}
          <div className='lg:w-1/3 mb-8 lg:mb-0'>
            <h2 className='text-4xl font-bold mb-4'>Portofolio</h2>
            <p className='text-gray-500'>
             berikut adalah persentase skill dan project yang pernah saya buat selama ini
            </p>
          </div>
          
          {/* Right Section: Skill bars */}
          <div className='lg:w-2/3 grid grid-cols-1 gap-8'>
            {skills.map((skill, index) => {
              return (
                <div key={index} className='flex items-center'>
                  {/* Skill logo */}
                  <img src={skill.image} alt={skill.image} className='h-12 w-12 mr-4' />
                  
                  {/* Skill progress bar */}
                  <div className='w-full'>
                    <div className='flex justify-between mb-2'>
                      <span className='text-lg font-semibold'>{skill.name}</span>
                      <span className='text-lg font-semibold'>{skill.percentage}%</span>
                    </div>
                    <div className='w-full bg-gray-300 rounded-full h-4'>
                      <div
                        className='bg-yellow-500 h-4 rounded-full'
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
