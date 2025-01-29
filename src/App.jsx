import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Booking } from "./pages/Booking";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Landing } from "./pages/Landing";

const App = () => (
  <Router>
    <Header />
    <main className="min-h-[80vh] w-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
