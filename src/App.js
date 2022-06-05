import React, { useState } from "react";

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

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       employees,
//       owners,
//       pets,
//     };
//   }

//   render() {
//     const { employees, owners, pets } = this.state;
//     return (
//       <div className="wrapper">
//         <Nav />
//         <Home employees={employees} owners={owners} pets={pets} />
//         <StaffList employees={employees} />
//         <PetsList pets={pets} />
//         <Footer />
//       </div>
//     );
//   }
// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  console.log(employees);

  const [employeesList, setEmployeesList] = useState(employees);
  const [ownersList, setOwnersList] = useState(owners);
  const [petsList, setPetsList] = useState(pets);
  // console.log(employeesList);



  return (
    <div className="wrapper">
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={ <Home employees={employeesList} owners={ownersList} pets={petsList}/>}/>
          <Route
            path="/staff"
            element={<StaffList employees={employeesList} />}
          />
          <Route path="/pets" element={<PetsList pets={petsList} />} />

           <Route path="/pets/cats" element={<PetsList pets={petsList}type='Cats' />} />

           <Route path="/pets/dogs" element={<PetsList pets={petsList}type='Dogs' />} />

        </Routes>

        <Footer />
      </Router>
    </div>
  );
};
export default App;