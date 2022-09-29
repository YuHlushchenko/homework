import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route, useLocation } from "react-router-dom"

import Home from './pages/Home';
import Contacts from './pages/Contacts';
import SubNavigation from './components/SubNavigation/SubNavigation';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Calculator from './pages/Calculator';
import Responses from './pages/Responses';
import Promotions from './pages/Promotions';
import Partners from './pages/Partners';


function App() {
  const location = useLocation()

  return (
    <div className="App">
      <section>
        <Navigation />
      </section>

      <section>
        {
          location.pathname === '/aboutus' ||
          location.pathname === '/responses' ||
          location.pathname === '/partners' ||
          location.pathname === '/promotions' 
            ? <SubNavigation type={'aboutUs'} />
            :
            location.pathname === '/services'
              ? <SubNavigation type={'services'}/>
              : undefined
        }
      </section>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/calculator" element={<Calculator />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/responses" element={<Responses />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/promotions" element={<Promotions />} />

        <Route path="/services" element={<Services />} />

      </Routes>
    </div>
  );
}

export default App;
