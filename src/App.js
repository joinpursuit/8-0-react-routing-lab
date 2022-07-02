import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employees } from "./data/employees.js";
import { owners } from "./data/owners";
import { pets } from "./data/pets";
import Pet from "./components/pets/Pet"
import PetsListNav from "./components/pets/PetsListNav";

class App extends React.Component {
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
        <Router>
          <Nav />
          <Routes>
            <Route Path="/" element={<Home employees={employees} owners={owners} pets={pets} />} />
            <Route Path="/staff"element={<StaffList employees={employees} />} />
            <Route Path="/pets/*" element={<PetsList pets={pets} />} />
            <Route path="./pets/cats" element={<PetsList pets={pets} type="Cats"/>}/>
            <Route path="./pets/dogs" element={<PetsList pets={pets} type="Dogs"/>}/>
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}
// router, routes and each route has been add to make the page
export default App;
