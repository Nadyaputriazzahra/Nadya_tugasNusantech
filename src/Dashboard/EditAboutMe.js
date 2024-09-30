// AboutMe.js
import React from 'react';

const EditAboutMe = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tentang Saya</h1>

      {/* Tabel Biodata */}
      <h2 style={styles.subTitle}>Biodata</h2>
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
  subTitle: {
    fontSize: '24px',
    margin: '20px 0 10px',
  },
  table: {
    width: '80%',
    margin: '0 auto',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    fontWeight: 'bold',
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'left',
  },
  tableData: {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'left',
  },
};

export default EditAboutMe;
