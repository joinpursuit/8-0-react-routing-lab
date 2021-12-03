import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";

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
import employees from "./data/employees.js";
import owners from "./data/owners";
import pets from "./data/pets";

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
        {/* <Nav />
        <Home employees={employees} owners={owners} pets={pets} />
        <StaffList employees={employees} />
        <PetsList pets={pets} />
        <Footer /> */}
        <Switch>
          <Redirect exact from="/pets" to="/pets/cats" />
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
