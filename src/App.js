import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from './Home';
import Shop from './Shop';

export default function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/shop" element={<Shop products={products}/>} />
      </Routes>
    </div>
  );
}