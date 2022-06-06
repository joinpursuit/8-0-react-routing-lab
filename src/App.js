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
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"

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
    
    const cats = pets.filter((cat) => {
      return cat.kind == "Cat"
    })
    const dogs = pets.filter((dog) => {
    return dog.kind == "Dog"
  })
    return (
      <div className="wrapper">
        <Router>
          <Nav />
          <Routes>
            <Route
              path="/"
              element={
                <Home employees={employees} owners={owners} pets={pets} />
              }
            />
            <Route
              path="/staff"
              element={<StaffList employees={employees} />}
            />
            <Route path="/pets" element={<PetsList pets={pets} />} />
            <Route path="/pets/cats" element={<PetsList pets={cats} />} />
            <Route path="/pets/dogs" element={<PetsList pets={dogs} />} />
            
            
            
          </Routes>
            <Footer />
        </Router>
      </div>
    );
  }
}

export default App;