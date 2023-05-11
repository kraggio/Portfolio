import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home.js";
import Loading from "./pages/loading.js";
import Contact from "./pages/Contact.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import "./App.css";

export const AppContext = React.createContext();

function App() {
  const [basename, setBasename] = useState("/");

  return (
    <AppContext.Provider value={{ basename, setBasename }}>
      <Router basename={basename}>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </AppContext.Provider>
  );
}

export default App;
