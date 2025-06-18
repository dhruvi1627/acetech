import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden overflow-y-auto scrollbar-hide bg-[#030308]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about-us" element={<AboutUsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
