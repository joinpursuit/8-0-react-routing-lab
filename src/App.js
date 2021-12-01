import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import { Route, Switch, Redirect } from "react-router-dom";
import { employees } from "./data/employees.js";
import { owners } from "./data/owners";
import { pets } from "./data/pets";

const App = () =>  {



    return (
      <div className="wrapper">
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home employees={employees} owners={owners} pets={pets} />
          </Route>

          <Route path="/staff">
            <StaffList employees={employees} />
          </Route>

          <Route path="/pets">
            {/* <Redirect to="/pets/cats" /> */}
            <PetsList  pets={pets} />
          </Route>
        </Switch>
        
        <Footer />
      </div>
    );
  
}

export default App;
