import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import offers from "./assets/offers.json";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Offer from "./pages/Offer.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
