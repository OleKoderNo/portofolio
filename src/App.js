// import logo from './logo.svg';
import './App.css';
import FooterBar from './globalComponents/Footer';
import LandingPage from './pages/LandingPage';
import Prosjekter from './pages/Prosjekter';
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { NavBar } from './globalComponents/NavBar';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <div>
      <Router>
        <NavBar>
          <NavLink to="/">&lsaquo; Om meg /&rsaquo;</NavLink>
          <NavLink to="/prosjekter">&lsaquo; Prosjekter /&rsaquo;</NavLink>
          <NavLink to="/kontakt">&lsaquo; Kontakt /&rsaquo;</NavLink>
        </NavBar>
        
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/prosjekter' element={<Prosjekter />} />
          <Route path='/kontakt' element={<Kontakt />} />
        </Routes>
        <FooterBar />  
      </Router>
    </div>
  );
}

export default App;
