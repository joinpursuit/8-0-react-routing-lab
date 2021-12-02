import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
/*
  Components
*/

import Home from "./home/Home";
import StaffList from "./staff/StaffList";
import PetsList from "./pets/PetsList";
/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import {employees} from "../data/employees"
import { owners } from "../data/owners";
import { pets } from "../data/pets";



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees,
      owners,
      pets,
    };
  }

  render() {
    const { employees, owners, pets } = this.state;
    return (
      <div className="wrapper">
        <Routes>
            <Route path="/" element={ <Home employees={employees} owners={owners} pets={pets} />} />
            <Route path="/staff" element={ <StaffList employees={employees} />} />
            {/* <Route path="/pets/*" element={   <PetsList pets={pets} />} /> */}
            <Route path="/pets" element ={<Navigate replace to ="/pets/cats" />}/> 
            <Route path="/pets/cats" element ={<  PetsList pets={pets} isCat={true}/> }/> 
            <Route path="/pets/dogs" element ={< PetsList pets={pets} isCat={false}/> }/> 
        </Routes>
      </div>
    );
  }
}

export default Main;