import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import MenuPage from './pages/MenuPage';
import GaleriaPage from './pages/GaleriaPage';

function App() {
  return (
   
    <div className="App">
      <Header/>
      
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="galeria" element={<GaleriaPage />} />
          <Route path="novedades" element={<NovedadesPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
        
      <Footer/>
    </div>
    
  );
}

export default App;
