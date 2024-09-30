import React from 'react';

import {Overview} from '../data';

const OverviewComponent = () => {
  return (
    <section id='overview' className='section bg-primary'>
      <div className='container mx-auto px-60'>
      <div className='bg-secondary rounded-lg p-6 shadow-lg'>
        {/* Overview Header Section */}
        <div className='flex flex-col items-center text-center'>
          <h1 className='text-3xl font-bold text-white mb-6'>Welcome to My Overview</h1>
          <p className='text-base text-white text-justify mb-6 px-11'>
            Hallo saya Nadya Putri Azzahra, siswi kelas 12 rpl (Rekayasa Perangkat Lunak)/ PPLG (Pemrograman Perangkat Lunak dan Game) di SMKs Muhammadiyah 4 Sukorejo.
          </p>
          <p className='text-base  text-justify mb-6'>
            Saya memilih jurusan ini karena saya merasa bahwa dunia digital terus berkembang, 
            dan saya ingin menjadi bagian dari perkembangan tersebut. Dengan mengambil jurusan ini 
            saya ingin belajar bagaimana aplikasi dan website dibuat dan dijalankan. 
            Selain itu, ketertarikan saya terhadap teknologi juga mendorong saya untuk belajar di bidang ini
             meskipun banyak kesulitan yang saya hadapi, namun saya merasa puas akan hasil yang telah saya capai.
          </p>
          <p className='text-base text-justify mb-6'>
            Selama belajar, saya sudah berkesempatan untuk mempelajari dasar-dasar pengembangan web 
            seperti HTML dan CSS. Meskipun masih dalam tahap pemula, saya telah berhasil menyelesaikan proyek-proyek kecil
             seperti:
          </p>
          <ul className=' text-base text-justify mb-6 px-11'>
            <li>- Portfolio pribadi, yang dirancang menampilkan keahlian saya</li>
            <li>- Website toko roti, untuk mendesain toko roti sederhana</li>
            <li>- CV multihalaman, yang berisi tentang pengalaman dan kemampuan saya secara lebih terstruktur</li>
            <li>- Kalkulator, sebuah kalkulator yang bisa dipakai untuk penjumlahan dan pembagian angka, dan lainnya</li>
          </ul>
          <p className='text-base text-justify mb-6'>
            Dengan mengambil jurusan RPL, saya ingin menguasai teknologi dan menemukan banyak solusi baru yang bermanfaat. 
            Meski perjalanan belajar saya masih panjang, saya yakin bahwa setiap proyek akan selesai sehingga menuju 
            pemahaman yang lebih mendalam tentang dunia teknologi.
          </p>
          <p className='text-base  text-justify'>
            Terima kasih telah mengunjungi profil saya, saya harap saya dapat terhubung dengan Anda di lain kesempatan 
            dan kolaborasi project di masa mendatang.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewComponent;
