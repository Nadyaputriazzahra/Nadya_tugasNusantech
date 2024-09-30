import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.navList}>
        <li style={{ ...styles.navItem, fontSize: '30px', fontWeight: 'bold' }}>Dashboard</li>
        <li style={styles.navItem}>
          <Link to="/dashboard/edit-home" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/dashboard/edit-overview" style={{ color: 'white', textDecoration: 'none' }}>Overview</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/dashboard/edit-aboutme" style={{ color: 'white', textDecoration: 'none' }}>About Me</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/dashboard/edit-skillpengalaman" style={{ color: 'white', textDecoration: 'none' }}>portfolio</Link>
        </li>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '20%', // Memperpanjang lebar sidebar dari 20% ke 30%
    hight: '100%',
    backgroundColor: '#000000',
    padding: '20px',
    boxSizing: 'border-box', // Menambahkan box-sizing agar padding dihitung dengan lebar keseluruhan
    
},
  navList: {
    listStyle: 'none',
    padding: 0,
  },
  navItem: {
    margin: '25px 0',
    cursor: 'pointer',
    fontSize: '18px', // Memperbesar teks untuk keterbacaan
  },
};

export default Sidebar;
