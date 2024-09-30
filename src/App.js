import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

// import components
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Portofolio from './components/portofolio';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';
import BackToTopBtn from './components/backToTopBtn';
import Overview from './components/overview';
import Login from './components/login';
import Sidebar from './components/Sidebar';
import EditOverview from './Dashboard/EditOverview';
import EditAboutMe from './Dashboard/EditAboutMe';
import EditSkillPengalaman from './Dashboard/EditSkill&Pengalaman';
import EditHome from './Dashboard/EditHome';

// Assume Sidebar is already defined or imported
// import Sidebar from './components/sidebar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (userLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const MainPage = () => {
    return (
      <div>
         <Header />
            <Hero id="home" />
            <About id="about" />
            <Portofolio id="portofolio" />
            <Services id="services" />
            <Overview id="overview" />
            <Contact id="contact" />
            <Footer />
            <BackToTopBtn />

        {/* Tampilkan tombol berdasarkan status login */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          {!isLoggedIn ? (
            <Link to="/login">
              <button style={{ padding: '10px 20px', fontSize: '16px' }}>Login</button>
            </Link>
          ) : (
            <button onClick={handleLogout} style={{ padding: '10px 20px', fontSize: '16px' }}>
              Logout
            </button>
          )}
        </div>
      </div>
    );
  };

  const DashboardLayout = () => {
    return (
      <div className="flex min-h-screen">
        {/* Assume Sidebar is defined */}
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="edit-home" element={<EditHome />} />
            <Route path="edit-overview" element={<EditOverview />} />
            <Route path="edit-aboutme" element={<EditAboutMe />} />
            <Route path="edit-skillpengalaman" element={<EditSkillPengalaman />} />
          </Routes>
        </div>
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        {/* Rute halaman utama */}
        <Route path="/" element={<MainPage />} />

        {/* Rute halaman login */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Rute dashboard */}
        <Route
          path="/dashboard/*"
          element={isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
