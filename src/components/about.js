import React from 'react';

//import data
import {about} from '../data';

//import image
import image from '../assets/img/about.jpg';

const About = () => {
    return (
        <section id='about' className='section bg-secondary'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={image} alt='' />
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                        <div className='flex flex-col'>
                          <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before::opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                            Nadya Putri A</h2>  
                            <p className='mb-4 text-accent'>siswi rekayasa perangkat lunak</p>
                            <hr className='mb-8 opacity-5' />
                            {/* <p className='mb-8'>
                                ini semua paargraf tentang diri saya nanti bakal saya ganti dengan informasi yang asli yang benar akan saya gunakan untuk penilaian,sementara pakai ini 
                                <br />ini semua paargraf tentang diri saya nanti bakal saya ganti dengan informasi yang asli yang benar akan saya gunakan untuk penilaian
                            </p> */}
                            <table className="mb-8 w-full text-left">
                                <tbody>
                                    <tr>
                                        <td className="font-bold">Nama</td>
                                        <td>: Nadya Putri Azzahra</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold">Alamat</td>
                                        <td>: Kesisih Bangunsari, Kendal, Jateng</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold">Tanggal Lahir</td>
                                        <td>: 22 Desember 2006</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold">Email</td>
                                        <td>: nadiaputrii4566@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold">No HP</td>
                                        <td>: 0889xxxxxxxx</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold">Hobi</td>
                                        <td>: Membuat DIY</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="mb-8 w-full text-left">
                                <thead>
                                    <tr>
                                        <th className="font-bold">Riwayat Pendidikan</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="font-bold">TK</td>
                                        <td>: TK ABA 1 Bangunsari</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold">SD/MI</td>
                                        <td>: MIM Bangunsari</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold">SMP</td>
                                        <td>: SMP Muhammadiyah 4 Sukorejo</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold">SMA/SMK</td>
                                        <td>: SMKs Muhammadiyah 4 Sukorejo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>
                            contact me
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;