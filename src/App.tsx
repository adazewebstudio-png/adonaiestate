import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import OurEstates from './pages/OurEstates';
import Insight from './pages/Insight';
import WhyInvest from './pages/WhyInvest';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import AirportGolfCity from './pages/estates/AirportGolfCity';
import UhasFloridaCity from './pages/estates/UhasFloridaCity';
import VoltaSafariCity from './pages/estates/VoltaSafariCity';
import LeadersCity from './pages/estates/LeadersCity';
import Subsidiaries from './pages/Subsidiaries';
import GolfCityViewRestaurant from './pages/subsidiaries/GolfCityViewRestaurant';
import GcvrAucreGardens from './pages/subsidiaries/GcvrAucreGardens';
import AirportGolfCitySchool from './pages/subsidiaries/AirportGolfCitySchool';
import Grolip from './pages/Grolip';
import LandSales from './pages/services/LandSales';
import Consultancy from './pages/services/Consultancy';
import PropertyManagement from './pages/services/PropertyManagement';
import Brokerage from './pages/services/Brokerage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estates" element={<OurEstates />} />
        <Route path="/estates/airport-golf-city" element={<AirportGolfCity />} />
        <Route path="/estates/uhas-florida-city" element={<UhasFloridaCity />} />
        <Route path="/estates/volta-safari-city" element={<VoltaSafariCity />} />
        <Route path="/estates/leaders-city" element={<LeadersCity />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/why-invest" element={<WhyInvest />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/subsidiaries" element={<Subsidiaries />} />
        <Route path="/subsidiaries/golf-city-view-restaurant" element={<GolfCityViewRestaurant />} />
        <Route path="/subsidiaries/gcvr-aucre-gardens" element={<GcvrAucreGardens />} />
        <Route path="/subsidiaries/airport-golf-city-school" element={<AirportGolfCitySchool />} />
        <Route path="/grolip" element={<Grolip />} />

        {/* Services */}
        <Route path="/services/land-sales" element={<LandSales />} />
        <Route path="/services/consultancy" element={<Consultancy />} />
        <Route path="/services/property-management" element={<PropertyManagement />} />
        <Route path="/services/brokerage" element={<Brokerage />} />
      </Routes>
    </Layout>
  );
}

export default App;
