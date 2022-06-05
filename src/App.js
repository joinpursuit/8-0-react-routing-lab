import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import PetForm from "./components/PetForm";
import NotFound from "./components/NotFound"
/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employees } from "./data/employees.js";
import { owners } from "./data/owners";
import { pets } from "./data/pets";

export default function App() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     employees,
  //     owners,
  //     pets,
  //   };
  // }

  // render() {
  //   const { employees, owners, pets } = this.state;
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home employees={employees} owners={owners} pets={pets} />} />
          <Route path="/staff" element={<StaffList employees={employees} />} />
          <Route path="/pets/*" element={<PetsList pets={pets} />} />
          <Route path="/petform" element={<PetForm/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        </Router>
        <Footer />
      
    </div>
  );
}



