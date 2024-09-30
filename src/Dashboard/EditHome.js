// Home.js
import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Selamat Datang di Halaman Profil Saya</h1>
      <p style={styles.description}>
      saya adalah siswi kelas 12 rpl rekayasa perangkat lunak di smk muhammadiyah 4 sukorejo, saya membuat cv sebagai pusat informasi tentang diri saya
                           
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
  },
};

export default Home;
