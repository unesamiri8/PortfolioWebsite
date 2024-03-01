import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/landing'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'

let App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index  element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);