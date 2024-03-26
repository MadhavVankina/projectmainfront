import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useDarkMode } from "./components/common/DarkModeContext";

function App() {
  const { theme } = useDarkMode();
  return (
    <div className={`${theme === "dark" ? "dark" : "light"} font-roboto`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
