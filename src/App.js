import React from "react";
/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import { employees } from "./data/employees.js";
import { owners } from "./data/owners";
import { pets } from "./data/pets";

import { Switch, Route, Link } from "react-router-dom";
import PetsListNav from "./components/pets/PetsListNav";
class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        {/* <Nav />
        <Home employees={employees} owners={owners} pets={pets} />
        <StaffList employees={employees} />
        <PetsList pets={pets} />
        <Footer /> */}
        <Switch>
          <Route exact path="/">
            <Nav />
            <Home employees={employees} owners={owners} pets={pets} />
            <Footer />
          </Route>
          <Route path="/staff">
            <Nav />
            <StaffList employees={employees} />
            <Footer />
          </Route>
          <Route path="/pets">
            <Nav />
            <PetsList pets={pets} />
            <Footer />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default App;
