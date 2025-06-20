import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import BusinessSolutionsPage from "./pages/BusinessSolutionsPage";
import TalentPage from "./pages/TalentPage";
import ServicePage from "./pages/ServicePage";
import ResourcesPage from "./pages/ResourcesPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CareerPage from "./pages/CareerPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import Gdpr from "./pages/Gdpr";

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden overflow-y-auto bg-[#030308]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />

            <Route path="/talent" element={<TalentPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route
              path="/business-solutions"
              element={<BusinessSolutionsPage />}
            />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/gdpr" element={<Gdpr />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditionsPage />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
