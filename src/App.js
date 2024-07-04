// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavigationBar from './components/NavigationBar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import ExploreCompetitions from './pages/ExploreCompetitions';
// import LeagueDetail from './pages/LeagueDetail'; // New component
// import Register from './pages/Register';
// import News from './pages/News';
// import NewsArticle from './pages/NewsArticle'; // New component
// import AboutUs from './pages/AboutUs';
// import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <NavigationBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/explore-competitions" element={<ExploreCompetitions />} />
//           <Route path="/league/:id" element={<LeagueDetail />} /> {/* New route */}
//           <Route path="/register" element={<Register />} />
//           <Route path="/news" element={<News />} />
//           <Route path="/news/:id" element={<NewsArticle />} /> {/* New route */}
//           <Route path="/about-us" element={<AboutUs />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavigationBar from './components/NavigationBar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import ExploreCompetitions from './pages/ExploreCompetitions';
// import LeagueDetail from './pages/LeagueDetail';
// import Register from './pages/Register';
// import InitialRegistration from './pages/InitialRegistration';
// import News from './pages/News';
// import AboutUs from './pages/AboutUs';
// import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <NavigationBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/explore-competitions" element={<ExploreCompetitions />} />
//           <Route path="/league/:id" element={<LeagueDetail />} />
//           <Route path="/register" element={<InitialRegistration />} />
//           <Route path="/register/team" element={<Register />} />
//           <Route path="/news" element={<News />} />
//           <Route path="/about-us" element={<AboutUs />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;




// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavigationBar from './components/NavigationBar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import ExploreCompetitions from './pages/ExploreCompetitions';
// import LeagueDetail from './pages/LeagueDetail';
// import Register from './pages/Register';
// import IndividualRegister from './pages/IndividualRegister';
// import InitialRegistration from './pages/InitialRegistration';
// import News from './pages/News';
// import NewsArticle from './pages/NewsArticle';
// import AboutUs from './pages/AboutUs';
// import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <NavigationBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/explore-competitions" element={<ExploreCompetitions />} />
//           <Route path="/league/:id" element={<LeagueDetail />} />
//           <Route path="/register" element={<InitialRegistration />} />
//           <Route path="/register/team" element={<Register />} />
//           <Route path="/register/individual" element={<IndividualRegister />} />
//           <Route path="/news" element={<News />} />
//           <Route path="/about-us" element={<AboutUs />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;





import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExploreCompetitions from './pages/ExploreCompetitions';
import LeagueDetail from './pages/LeagueDetail'; 
import Register from './pages/Register';
import News from './pages/News';
import NewsArticle from './pages/NewsArticle'; // Ensure NewsArticle is imported
import AboutUs from './pages/AboutUs';
import InitialRegistration from './pages/InitialRegistration'; // Import InitialRegistration
import IndividualRegister from './pages/IndividualRegister'; // Import IndividualRegister
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore-competitions" element={<ExploreCompetitions />} />
          <Route path="/league/:id" element={<LeagueDetail />} /> 
          <Route path="/register" element={<InitialRegistration />} /> {/* Change this to InitialRegistration */}
          <Route path="/register/team" element={<Register />} /> {/* New route for team registration */}
          <Route path="/register/individual" element={<IndividualRegister />} /> {/* New route for individual registration */}
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsArticle />} /> {/* New route for news articles */}
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
