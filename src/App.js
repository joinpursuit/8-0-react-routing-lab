import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";

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
  // renderCats=()=>{
  //   const cats=this.state.pets.filter(pet=>pet.kind==="Cat");
  //   return (
  //     <React.Fragment>
  //       <Nav />
  //       <PetsList pets={cats}/>
  //       <Footer />
  //     </React.Fragment>
  //   );
  // };
  // renderDogs=()=>{
  //   const dogs=this.state.pets.filter(pet=>pet.kind==="Dog");
  //   return (
  //     <React.Fragment>
  //       <Nav />
  //       <PetsList pets={dogs}/>
  //       <Footer />
  //     </React.Fragment>
  //   );
  // };
  


  render() {
    const { employees, owners, pets } = this.state;
    return (
      <Router>
        <div className="wrapper">
          <Switch>
            <Route exact path="/">
              <Nav />
              <Home employees={employees} owners={owners} pets={pets} />
              <Footer />
            </Route>
            <Route path="/staff">
              <Nav />
              {/* <Home employees={employees} owners={owners} pets={pets} /> */}
              <StaffList employees={employees}/>
              <Footer />
            </Route>
           
            <Redirect exact from="/pets" to="/pets/cats"/>
           
            <Route path="/pets/:specieType" 
              render={(props=>(
                                <React.Fragment>
                                   <Nav />
                                   <PetsList pets={pets} {...props}/>
                                   <Footer />
                                </React.Fragment>
                                
              ))} />
              
            {/* <Route path="/pets/dogs">
              <Nav />
              <PetsList pets={pets} />
              <Footer />
            </Route> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
