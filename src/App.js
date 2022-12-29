import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import 'bootstrap';

import Home from "./components/Home/Home";
import QR from './components/QR';
import EnterCode from './components/EnterCode';
import Success from "./components/Success/index";
import Login from './components/Login';
import Instructions from './components/Instructions';
import Q1 from './components/Questions/Q1';
import Q2 from './components/Questions/Q2';
import Q3 from './components/Questions/Q3';
import Q4 from './components/Questions/Q4';
import Q5 from './components/Questions/Q5';
import Error from './components/Error/Error';

const App = () => {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/QR" element={<QR />} />
          <Route path="/EnterCode" element={<EnterCode />} />
          <Route path="/Success/:user_id" element={<Success />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/Instructions" element={<Instructions />} />
          <Route path="/Q1" element={<Q1 />} />
          <Route path="/Q2" element={<Q2 />} />
          <Route path="/Q3" element={<Q3 />} />
          <Route path="/Q4" element={<Q4 />} />
          <Route path="/Q5" element={<Q5 />} />

          <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}
export default App
