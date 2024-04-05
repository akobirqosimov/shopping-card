import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Detail from "./components/pages/Detail";
import Store from "./components/pages/Store";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
