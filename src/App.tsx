import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import About from "./pages/About";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="bg-background text-white">
      <Router>
        <Header />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
