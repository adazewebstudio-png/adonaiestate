import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load all pages for better performance (Code Splitting)
const Home = lazy(() => import('./pages/Home'));
const OurEstates = lazy(() => import('./pages/OurEstates'));
const Insight = lazy(() => import('./pages/Insight'));
const WhyInvest = lazy(() => import('./pages/WhyInvest'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const AirportGolfCity = lazy(() => import('./pages/estates/AirportGolfCity'));
const UhasFloridaCity = lazy(() => import('./pages/estates/UhasFloridaCity'));
const VoltaSafariCity = lazy(() => import('./pages/estates/VoltaSafariCity'));
const LeadersCity = lazy(() => import('./pages/estates/LeadersCity'));
const MillenniumCity = lazy(() => import('./pages/estates/MillenniumCity'));
const Subsidiaries = lazy(() => import('./pages/Subsidiaries'));
const GolfCityViewRestaurant = lazy(() => import('./pages/subsidiaries/GolfCityViewRestaurant'));
const GcvrAucreGardens = lazy(() => import('./pages/subsidiaries/GcvrAucreGardens'));
const AirportGolfCitySchool = lazy(() => import('./pages/subsidiaries/AirportGolfCitySchool'));
const Grolip = lazy(() => import('./pages/Grolip'));
const LandSales = lazy(() => import('./pages/services/LandSales'));
const Consultancy = lazy(() => import('./pages/services/Consultancy'));
const PropertyManagement = lazy(() => import('./pages/services/PropertyManagement'));
const Brokerage = lazy(() => import('./pages/services/Brokerage'));
const Services = lazy(() => import('./pages/Services'));
const AgentProfile = lazy(() => import('./pages/AgentProfile'));
const Listings = lazy(() => import('./pages/Listings'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const PropertyDetails = lazy(() => import('./pages/PropertyDetails'));
const Gallery = lazy(() => import('./pages/Gallery'));
const CEO = lazy(() => import('./pages/CEO'));
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/legal/TermsOfUse'));
const CookiePolicy = lazy(() => import('./pages/legal/CookiePolicy'));
const AMLPolicy = lazy(() => import('./pages/legal/AMLPolicy'));
const SellLand = lazy(() => import('./pages/SellLand'));

function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estates" element={<OurEstates />} />
          <Route path="/estates/airport-golf-city" element={<AirportGolfCity />} />
          <Route path="/estates/uhas-florida-city" element={<UhasFloridaCity />} />
          <Route path="/estates/volta-safari-city" element={<VoltaSafariCity />} />
          <Route path="/estates/leaders-city" element={<LeadersCity />} />
          <Route path="/estates/millennium-city" element={<MillenniumCity />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/why-invest" element={<WhyInvest />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/ceo" element={<CEO />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subsidiaries" element={<Subsidiaries />} />
          <Route path="/subsidiaries/golf-city-view-restaurant" element={<GolfCityViewRestaurant />} />
          <Route path="/subsidiaries/gcvr-aucre-gardens" element={<GcvrAucreGardens />} />
          <Route path="/subsidiaries/airport-golf-city-school" element={<AirportGolfCitySchool />} />
          <Route path="/grolip" element={<Grolip />} />

          {/* Services */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/land-sales" element={<LandSales />} />
          <Route path="/services/consultancy" element={<Consultancy />} />
          <Route path="/services/property-management" element={<PropertyManagement />} />
          <Route path="/services/brokerage" element={<Brokerage />} />

          {/* Agent & Listings */}
          <Route path="/agent/richard-adaze" element={<AgentProfile />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listings/:id" element={<PropertyDetails />} />
          <Route path="/insight/:slug" element={<BlogPost />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/aml-kyc-policy" element={<AMLPolicy />} />
          <Route path="/sell-land" element={<SellLand />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
