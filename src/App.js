import React from "react";

/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import { Route, Switch } from "react-router-dom";
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
          <Route exact path='/' component={Home} />
          <Route path='/Pets' component={PetsList} />
          <Route path='/Staff' component={StaffList} />
          </Switch>
        {/* when the url changes, display this component}


        {/* <Home employees={employees} owners={owners} pets={pets} />
        <StaffList employees={employees} />
        <PetsList pets={pets} /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
