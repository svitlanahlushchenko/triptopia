import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Destination from './pages/Destination/Destination';
import Faq from './pages/Faq/Faq';
import Pricing from './pages/Pricing/Pricing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'typeface-roboto';
import 'typeface-poppins';

function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppRouter;
