import { Routes, Route } from 'react-router-dom'

import Home from '@pages/Home'
import AboutUs from '@pages/AboutUs'
import Calculator from '@pages/Calculator'
import Contacts from '@pages/Contacts'
import Responses from '@pages/Responses'
import Partners from '@pages/Partners'
import Promotions from '@pages/Promotions'
import Services from '@pages/Services'
import ServicesItem from '@pages/ServicesItem'
import DesignRepair from '@pages/DesignRepair'
import CommercialProperty from '@pages/CommercialProperty'
import ApartmentDesign from '@pages/ApartmentDesign'
import ApartmentDesignItem from '@pages/ApartmentDesignItem'
import SmartHouse from '@pages/SmartHouse'
import SmartHouseItem from '@pages/SmartHouseItem'
import Page404 from '@pages/Page404'

function App() {
  return (
    <>
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
