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
import { employees } from "./data/employees.js";
import { owners } from "./data/owners";
import { pets } from "./data/pets";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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


          <Switch>
            <Route exact path="/">
              <Nav />
              <Home employees={employees} owners={owners} pets={pets} />
              <Footer />
            </Route>
          
            <Route exact path="/staff">
              <Nav />
              <StaffList employees={employees} />
              <Footer />
            </Route>
            <Route exact path="/pets">
              <Nav />
              <PetsList pets={pets} />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
