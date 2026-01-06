import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CareerClip from "./components/CareerClip";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page with all sections */}
        <Route path="/" element={<HomePage />} />

        {/* Career highlights page */}
        <Route path="/career" element={<CareerClip />} />
      </Routes>
    </Router>
  );
}

export default App;
