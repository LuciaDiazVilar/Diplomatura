import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import ContactosPage from "./pages/ContactosPage";
import GenerosPage from "./pages/GenerosPage";
import HomePage from "./pages/HomePage";
import PeliculasPage from "./pages/PeliculasPage"
import SeriesPage from "./pages/SeriesPage";
import Body from"./App.css";
import LoginPage from "./pages/login"

function App() {
  return (
    <div className = "App" style={Body}>
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/generos" element={<GenerosPage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/peliculas" element={<PeliculasPage />} />
          <Route path="/contactos" element={<ContactosPage />} />
          <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div> 
  );
}

export default App;
