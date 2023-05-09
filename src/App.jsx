import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import offers from "./assets/offers.json";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Offer from "./pages/Offer.jsx";
import Login from "./pages/Login.jsx";
import Payment from "./pages/Payment.jsx";

import { useState } from "react";
import Cookies from "js-cookie";

import "./App.css";
import Subscription from "./pages/Subscription.jsx";
import Publish from "./pages/Publish.jsx";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [search, setSearch] = useState("");
  // console.log(token);
  return (
    <Router>
      <Header
        token={token}
        setToken={setToken}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={<Home search={search} token={token} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route
          path="/signup"
          element={<Subscription token={token} setToken={setToken} />}
        />
        <Route
          path="/login"
          element={<Login token={token} setToken={setToken} />}
        />
        <Route path="/publish" element={<Publish token={token} />} />
        <Route path="offer/:id/payment/" element={<Payment token={token} />} />
      </Routes>
    </Router>
  );
}

export default App;
