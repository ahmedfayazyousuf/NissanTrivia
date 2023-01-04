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
import AltimaQ1 from './components/Questions/Nissan/Altima/Q1'
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
          <Route path="/AltimaQ1" element={<AltimaQ1 />} />

          <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}
export default App
