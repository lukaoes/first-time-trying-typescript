import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './layout';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contacts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
