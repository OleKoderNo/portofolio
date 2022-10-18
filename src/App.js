import { 
  HashRouter as Router, 
  Routes, 
  Route, 
  NavLink 
} from "react-router-dom";
import { t } from "i18next";
import { NavBar } from './globalComponents/NavBar';
import LandingPage from "./pages/landingPage/LandingPage";
import Prosjekter from "./pages/prosjekterComp/Prosjekter";
import FooterBar from './globalComponents/Footer';
import Kontakt from "./pages/kontaktPage/Kontakt";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavBar>
          <NavLink 
            to="/"
          >
            &lsaquo; {t("App.aboutMe")} /&rsaquo;
          </NavLink>
          <NavLink 
            to="/prosjekter"
          >
            &lsaquo; {t("App.projects")} /&rsaquo;
          </NavLink>
          <NavLink 
            to="/kontakt"
          >
            &lsaquo; {t("App.contact")} /&rsaquo;
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
