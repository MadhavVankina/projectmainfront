import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useDarkMode } from "./components/common/DarkModeContext";
import Login from "./pages/Login";

function App() {
  const { theme } = useDarkMode();
  return (
    <div className={`${theme === "dark" ? "dark" : "light"} font-roboto`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
