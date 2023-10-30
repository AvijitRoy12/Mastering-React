import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "Home";
import About from "About";
import Contact from "Contact";
import { JsxAndRenderingElements } from "JsxAndRenderingElements/JsxAndRenderingElements";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
      <App />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/JsxAndRenderingElements"
            element={<JsxAndRenderingElements />}
          />
        </Routes>
      </BrowserRouter>
    </>
  </React.StrictMode>
);
