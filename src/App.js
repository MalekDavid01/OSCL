import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExploreCompetitions from './pages/ExploreCompetitions';
import Register from './pages/Register';
import News from './pages/News';
import AboutUs from './pages/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore-competitions" element={<ExploreCompetitions />} />
          <Route path="/register" element={<Register />} />
          <Route path="/news" element={<News />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;