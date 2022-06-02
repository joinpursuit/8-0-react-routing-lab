import React from 'react';

/*
  Components
*/
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import StaffList from './components/staff/StaffList';
import PetsList from './components/pets/PetsList';

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { employees } from './data/employees.js';
import { owners } from './data/owners';
import { pets } from './data/pets';

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
      <div className='wrapper'>
        <Router>
          <Nav />
          <Routes>
            <Route
              path='/'
              element={
                <Home employees={employees} owners={owners} pets={pets} />
              }
            />
            <Route path='/employees'>
              <Route
                index
                element={<StaffList employees={employees} type={'Employees'} />}
              />
              <Route path=':id' element={<StaffList employees={employees} />} />
            </Route>

            <Route path='/pets'>
              <Route index element={<PetsList pets={pets} type={'Pets'} />} />
              <Route path=':id' element={<PetsList pets={pets} />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
