import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import 'bootstrap';

import Home from "./components/Home/Home";
import Success from "./components/Success/index";
import Instructions from './components/Instructions';
import AltimaQ1 from './components/Questions/Nissan/Altima/Q1'
import Error from './components/Error/Error';


import InfinitiGenericQ1 from './components/Questions/Infiniti/Generic/Q1';
import InfinitiGenericQ2 from './components/Questions/Infiniti/Generic/Q2';
import InfinitiGenericQ3 from './components/Questions/Infiniti/Generic/Q3';
import InfinitiGenericQ4 from './components/Questions/Infiniti/Generic/Q4';
import InfinitiGenericQ5 from './components/Questions/Infiniti/Generic/Q5';
import InfinitiGenericQ6 from './components/Questions/Infiniti/Generic/Q6';




const App = () => {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Success/:user_id" element={<Success />} />
          <Route path="/Instructions" element={<Instructions />} />
          <Route path="/AltimaQ1" element={<AltimaQ1 />} />

          <Route path="/InfinitiGenericQ1" element={<InfinitiGenericQ1 />} />
          <Route path="/InfinitiGenericQ2" element={<InfinitiGenericQ2 />} />
          <Route path="/InfinitiGenericQ3" element={<InfinitiGenericQ3 />} />
          <Route path="/InfinitiGenericQ4" element={<InfinitiGenericQ4 />} />
          <Route path="/InfinitiGenericQ5" element={<InfinitiGenericQ5 />} />
          <Route path="/InfinitiGenericQ6" element={<InfinitiGenericQ6 />} />


          <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}
export default App
