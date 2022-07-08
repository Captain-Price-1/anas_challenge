import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome, Login, Menu, Checkout, ProtectedRoute } from "./pages";
import Navbar from "./components/Navbar";

function App() {
  const [isModalOpen, setIsModal] = useState(false);
  return (
    <BrowserRouter>
      <Navbar isModalOpen={isModalOpen} setIsModal={setIsModal} />
      <Routes>
        <Route path="/" element={<Welcome />} />

        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        ></Route> */}
        <Route
          path="/menu"
          element={<Menu setIsModal={setIsModal} isModalOpen={isModalOpen} />}
        />
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
