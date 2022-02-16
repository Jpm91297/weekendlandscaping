import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/header';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import ContactMe from './components/ContactMe.js/ContactMe';
import Services from './components/Services/Services';
import GallerySection from './components/Gallery/GallerySection';
import GalleryPage from './components/Gallery/GalleryPage';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { useState } from 'react';

const Home = () => (
  <>
    <Hero />
    <About />
    <Services />
    <GallerySection />
    <ContactMe />
  </>
)

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <BrowserRouter>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<GalleryPage />} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
