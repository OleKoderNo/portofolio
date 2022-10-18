import { 
  HashRouter as Router, 
  Routes, 
  Route, 
  NavLink 
} from "react-router-dom";
import { NavBar } from './globalComponents/NavBar';

import FooterBar from './globalComponents/Footer';
import './App.css';
import LandingPage from "./pages/landingPage/LandingPage";
import Prosjekter from "./pages/prosjekterComp/Prosjekter";
import Kontakt from "./pages/kontaktPage/Kontakt";

function App() {
  return (
    <>
      <Router>
        <NavBar>
          <NavLink 
            to="/"
          >
            &lsaquo; Om meg /&rsaquo;
          </NavLink>
          <NavLink 
            to="/prosjekter"
          >
            &lsaquo; Prosjekter /&rsaquo;
          </NavLink>
          <NavLink 
            to="/kontakt"
          >
            &lsaquo; Kontakt /&rsaquo;
          </NavLink>
        </NavBar>
        
        <Routes>
          <Route 
            path='/' 
            element={<LandingPage />} 
          />
          <Route 
            path='/prosjekter' 
            element={<Prosjekter />} 
          />
          <Route 
            path='/kontakt' 
            element={<Kontakt />} 
          />
        </Routes>
        <FooterBar />  
      </Router>
    </>
  );
}

export default App;
