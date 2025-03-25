import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from "./pages/Demo";
import "./App.css";
import Overview from "./pages/Overview";
import Landing from "./pages/Landing";
import Timeline from "./pages/Timeline";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/track-the-crowd" element={<Landing />} />
        <Route path="/track-the-crowd/overview" element={<Overview />} />
        <Route path="/track-the-crowd/demo" element={<Demo />} />
        <Route path="/track-the-crowd/timeline" element={<Timeline />} />
        <Route path="/track-the-crowd/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
