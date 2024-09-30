import React from 'react';

const EditSkillPengalaman = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>portofolio</h1>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Skill</h2>
        <ul style={styles.skillList}>
          <li style={styles.skillItem}>HTML</li>
          <li style={styles.skillItem}>CSS</li>
          <li style={styles.skillItem}>JavaScript</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Pengalaman</h2>
        <ul style={styles.experienceList}>
          <li style={styles.experienceItem}>
            <strong>HTML</strong> 
            <p style={styles.experienceDescription}>
             Membuat CV
            </p>
          </li>
          <li style={styles.experienceItem}>
            <strong>CSS</strong>
            <p style={styles.experienceDescription}>
              Mendesain Halaman web
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: 'White',
  },
  title: {
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  skillList: {
    listStyle: 'none',
    padding: 0,
  },
  skillItem: {
    margin: '8px 0',
    fontSize: '18px',
    backgroundColor:'#000000',
    padding: '10px',
    borderRadius: '5px',
  },
  experienceList: {
    listStyle: 'none',
    padding: 0,
  },
  experienceItem: {
    margin: '15px 0',
    backgroundColor: '#000000',
    padding: '15px',
    borderRadius: '5px',
  },
  experienceDescription: {
    marginTop: '5px',
    fontSize: '16px',
  },
};

export default EditSkillPengalaman;
