import React from "react";
import { Route, Switch, Link } from "react-router-dom";

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
    // const { employees, owners, pets } = this.state;
    return (
      <div className="wrapper">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pets" component={PetsList} />
          <Route path="/staff" component={StaffList} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
