import React from "react";
import { Switch, Route } from "react-router-dom";
/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

const App = () => {
    return (
      <div className="wrapper">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/staff" component={StaffList} />
          {/* <StaffList employees={employees} /> */}
          <Route path="/pets" component={PetsList} />
          {/* <PetsList pets={pets} /> */}
        </Switch>
        <Footer />
      </div>
    );
}

export default App;
