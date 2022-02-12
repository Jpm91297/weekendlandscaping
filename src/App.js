import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/header';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import ContactMe from './components/ContactMe.js/ContactMe';
import { useState } from 'react';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Hero />
      <About />
      <ContactMe />
    </>
  );
}

export default App;
