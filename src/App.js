import './App.scss';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Banner from './component/Banner';
import Row from './component/Row';
import requests from './config/Requests';
import Video from './component/Video';

import {   Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <Nav />
        <Banner />
        <Row title="Programmes originaux Netflix" fetchUrl={requests.fetchNetflixOriginals} isPoster={true} />
        <Row title="Tendances actuelles" fetchUrl={requests.fetchTrending} />
        <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
        <Row title="Films d'action" fetchUrl={requests.fetchActionMovies} />
        <Row title="Films d'horreur" fetchUrl={requests.fetchTrending} />
        <Row title="Comédies" fetchUrl={requests.fetchTopRated} />
        <Row title="Documentaires" fetchUrl={requests.fetchActionMovies} />
        <Footer />

        <Routes>
          <Route path="/video/:id" element={<Video />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      
    </div>
  );
}
export default App;

