import React from "react";
import { Route, Switch } from "react-router-dom";

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

class App extends Component {
  constructor (props) {
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
        <Nav />
        <Home employees={employees} owners={owners} pets={pets} />
        <StaffList employees={employees} />
        <PetsList pets={pets} />

        <Switch>
          <Route exact path="/" >
          <Home employees={employees} owners={owners} pets={pets} />
          </Route>
          <Route exact path="/staff">
          <StaffList employees={employees} />
          </Route>
          <Route path="/pets" >
          <PetsList pets={pets} />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;



// import Nav from "./components/common/Nav";
// import Footer from "./components/common/Footer";
// import Home from "./components/home/Home";
// import StaffList from "./components/staff/StaffList";
// import PetsList from "./components/pets/PetsList";

// import { employees } from "./data/employees.js";
// import { owners } from "./data/owners";
// import { pets } from "./data/pets";