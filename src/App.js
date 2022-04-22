import React from 'react'
import Data from './components/data/Data'
import Cloud from './components/cloud/Cloud'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      <Cloud />
      <Footer />

    </>
  );
}

export default App;
