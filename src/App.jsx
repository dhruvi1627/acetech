import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import BusinessSolutionsPage from "./pages/BusinessSolutionsPage";

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden overflow-y-auto scrollbar-hide bg-[#030308]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route
              path="/business-solutions"
              element={<BusinessSolutionsPage />}
            />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
