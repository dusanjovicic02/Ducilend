import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NovaRegistracija from './pages/NovaRegistracija';
import MojProfil from './pages/MojProfil';

function App() {
  return (
    <div>
      <Header />
      {/* Izaberi stranicu koju želiš prikazati */}
      {/* <MojProfil /> */}
      <NovaRegistracija />
      <Footer />
    </div>
  );
}

export default App;
