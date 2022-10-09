import Navigation from './components/Navigation/Navigation'
import { Routes, Route, useLocation } from 'react-router-dom'

import SubNavigation from './components/SubNavigation/SubNavigation'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Calculator from './pages/Calculator'
import Contacts from './pages/Contacts'
import Responses from './pages/Responses'
import Partners from './pages/Partners'
import Promotions from './pages/Promotions'
import Services from './pages/Services'
import ServicesItem from './pages/ServicesItem'
import DesignRepair from './pages/DesignRepair'
import CommercialProperty from './pages/CommercialProperty'
import ApartmentDesign from './pages/ApartmentDesign'
import ApartmentDesignItem from './pages/ApartmentDesignItem'
import SmartHouse from './pages/SmartHouse'
import SmartHouseItem from './pages/SmartHouseItem'
import Page404 from './pages/Page404'

function App() {
  const location = useLocation()

  return (
    <>
      <section>
        <Navigation />
      </section>

      <section>
        {location.pathname === '/about-us' ||
        location.pathname === '/responses' ||
        location.pathname === '/partners' ||
        location.pathname === '/promotions' ? (
          <SubNavigation type={'aboutUs'} />
        ) : location.pathname === '/services' ||
          location.pathname === '/services/economy' ||
          location.pathname === '/services/eurorepair' ||
          location.pathname === '/services/business' ||
          location.pathname === '/design-repair' ||
          location.pathname === '/commercial-property' ||
          location.pathname === '/apartment-design' ||
          location.pathname === '/apartment-design/project' ||
          location.pathname === '/apartment-design/visualisation' ||
          location.pathname === '/apartment-design/placement' ||
          location.pathname === '/smart-house' ||
          location.pathname === '/smart-house/climate' ||
          location.pathname === '/smart-house/lighting' ||
          location.pathname === '/smart-house/security' ? (
          <SubNavigation type={'services'} />
        ) : undefined}
      </section>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/calculator" element={<Calculator />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/responses" element={<Responses />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/promotions" element={<Promotions />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/:name" element={<ServicesItem />} />

        <Route path="/design-repair" element={<DesignRepair />} />
        <Route path="/commercial-property" element={<CommercialProperty />} />

        <Route path="/apartment-design" element={<ApartmentDesign />} />
        <Route
          path="/apartment-design/:name"
          element={<ApartmentDesignItem />}
        />

        <Route path="/smart-house" element={<SmartHouse />} />
        <Route path="/smart-house/:name" element={<SmartHouseItem />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
