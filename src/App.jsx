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
import PairToPairPage from "./pages/talent/PairToPairPage";
import DedicatedTeamPage from "./pages/talent/DedicatedTeamPage";
import TaskForcePage from "./pages/talent/TaskForcePage";
import EndToEndPage from "./pages/Services/EndToEndPage";
import AgileDevelopmentSprint from "./pages/Services/AgileDevelopmentSprint";
import NextGenTech from "./pages/Services/NextGenTech";
import StartUpsPage from "./pages/business_solution/StartUpsPage";
import Blog from "./components/Resources/Blog/Blog";
import CategoryBlogs from "./components/Resources/Blog/CategoryBlogs";
import TagBlogs from "./components/Resources/Blog/TagBlogs";
import BlogDetails from "./components/Resources/Blog/BlogDetails";

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
            {/* Services */}
            <Route path="/service" element={<ServicePage />} />

            <Route
              path="/services/end-to-end-startup-support"
              element={<EndToEndPage />}
            />
            <Route
              path="/services/agile-development-sprint-package"
              element={<AgileDevelopmentSprint />}
            />
            <Route
              path="/services/next-gen-tech-integration"
              element={<NextGenTech />}
            />

            <Route
              path="/business-solutions"
              element={<BusinessSolutionsPage />}
            />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/category/:categorySlug" element={<CategoryBlogs />} />
            <Route path="/tag/:tagSlug" element={<TagBlogs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/page/:page" element={<Blog />} />
            <Route path="/:slug" element={<BlogDetails />} />

            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/gdpr" element={<Gdpr />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditionsPage />}
            />
            <Route path="/talent/pair-to-pair" element={<PairToPairPage />} />
            <Route
              path="/talent/dedicated-team"
              element={<DedicatedTeamPage />}
            />
            <Route path="/talent/task-force" element={<TaskForcePage />} />
            <Route
              path="/business-solutions/startups"
              element={<StartUpsPage />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
