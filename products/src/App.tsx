import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './layout';
import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
