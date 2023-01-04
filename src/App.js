import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import 'bootstrap';

import Home from "./components/Home/Home";
import Success from "./components/Success/index";
import Instructions from './components/Instructions';
import Error from './components/Error/Error';



//NISSAN CARS
import AltimaQ1 from './components/Questions/Nissan/Altima/Q1'

//INFINITI CARS
import InfinitiGenericQ1 from './components/Questions/Infiniti/Generic/Q1';
import InfinitiGenericQ2 from './components/Questions/Infiniti/Generic/Q2';
import InfinitiGenericQ3 from './components/Questions/Infiniti/Generic/Q3';
import InfinitiGenericQ4 from './components/Questions/Infiniti/Generic/Q4';
import InfinitiGenericQ5 from './components/Questions/Infiniti/Generic/Q5';
import InfinitiGenericQ6 from './components/Questions/Infiniti/Generic/Q6';

import Q50Q1 from './components/Questions/Infiniti/Q50/Q1';
import Q50Q2 from './components/Questions/Infiniti/Q50/Q2';
import Q50Q3 from './components/Questions/Infiniti/Q50/Q3';
import Q50Q4 from './components/Questions/Infiniti/Q50/Q4';

import Q60Q1 from './components/Questions/Infiniti/Q60/Q1';
import Q60Q2 from './components/Questions/Infiniti/Q60/Q2';
import Q60Q3 from './components/Questions/Infiniti/Q60/Q3';
import Q60Q4 from './components/Questions/Infiniti/Q60/Q4';

import QX50Q1 from './components/Questions/Infiniti/QX50/Q1';
import QX50Q2 from './components/Questions/Infiniti/QX50/Q2';
import QX50Q3 from './components/Questions/Infiniti/QX50/Q3';
import QX50Q4 from './components/Questions/Infiniti/QX50/Q4';

import QX55Q1 from './components/Questions/Infiniti/QX55/Q1';
import QX55Q2 from './components/Questions/Infiniti/QX55/Q2';
import QX55Q3 from './components/Questions/Infiniti/QX55/Q3';
import QX55Q4 from './components/Questions/Infiniti/QX55/Q4';
import QX55Q5 from './components/Questions/Infiniti/QX55/Q5';

import QX60Q1 from './components/Questions/Infiniti/QX60/Q1';
import QX60Q2 from './components/Questions/Infiniti/QX60/Q2';
import QX60Q3 from './components/Questions/Infiniti/QX60/Q3';
import QX60Q4 from './components/Questions/Infiniti/QX60/Q4';
import QX60Q5 from './components/Questions/Infiniti/QX60/Q5';

import QX80Q1 from './components/Questions/Infiniti/QX80/Q1';
import QX80Q2 from './components/Questions/Infiniti/QX80/Q2';
import QX80Q3 from './components/Questions/Infiniti/QX80/Q3';
import QX80Q4 from './components/Questions/Infiniti/QX80/Q4';
import QX80Q5 from './components/Questions/Infiniti/QX80/Q5';



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

          <Route path="/Q50Q1" element={<Q50Q1 />} />
          <Route path="/Q50Q2" element={<Q50Q2 />} />
          <Route path="/Q50Q3" element={<Q50Q3 />} />
          <Route path="/Q50Q4" element={<Q50Q4 />} />

          <Route path="/Q60Q1" element={<Q60Q1 />} />
          <Route path="/Q60Q2" element={<Q60Q2 />} />
          <Route path="/Q60Q3" element={<Q60Q3 />} />
          <Route path="/Q60Q4" element={<Q60Q4 />} />

          <Route path="/QX50Q1" element={<QX50Q1 />} />
          <Route path="/QX50Q2" element={<QX50Q2 />} />
          <Route path="/QX50Q3" element={<QX50Q3 />} />
          <Route path="/QX50Q4" element={<QX50Q4 />} />

          <Route path="/QX55Q1" element={<QX55Q1 />} />
          <Route path="/QX55Q2" element={<QX55Q2 />} />
          <Route path="/QX55Q3" element={<QX55Q3 />} />
          <Route path="/QX55Q4" element={<QX55Q4 />} />
          <Route path="/QX55Q5" element={<QX55Q5 />} />

          <Route path="/QX60Q1" element={<QX60Q1 />} />
          <Route path="/QX60Q2" element={<QX60Q2 />} />
          <Route path="/QX60Q3" element={<QX60Q3 />} />
          <Route path="/QX60Q4" element={<QX60Q4 />} />
          <Route path="/QX60Q5" element={<QX60Q5 />} />
          
          <Route path="/QX80Q1" element={<QX80Q1 />} />
          <Route path="/QX80Q2" element={<QX80Q2 />} />
          <Route path="/QX80Q3" element={<QX80Q3 />} />
          <Route path="/QX80Q4" element={<QX80Q4 />} />
          <Route path="/QX80Q5" element={<QX80Q5 />} />

          <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}
export default App
