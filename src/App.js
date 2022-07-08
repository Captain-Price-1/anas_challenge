import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome, Login, Menu, Checkout, ProtectedRoute } from "./pages";
import Navbar from "./components/Navbar";

function App() {
  const [isModalOpen, setIsModal] = useState(false);
  const [cart, hideCart] = useState(true);
  return (
    <BrowserRouter>
      <Navbar
        isModalOpen={isModalOpen}
        setIsModal={setIsModal}
        cart={cart}
        hideCart={hideCart}
      />
      <Routes>
        <Route path="/" element={<Welcome hideCart={hideCart} />} />

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
          element={
            <Menu
              setIsModal={setIsModal}
              isModalOpen={isModalOpen}
              hideCart={hideCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} hideCart={hideCart} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
