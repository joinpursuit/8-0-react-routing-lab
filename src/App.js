import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*
  Components
*/
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import StaffList from './components/staff/StaffList';
import PetsList from './components/pets/PetsList';
import OwnersList from './components/owners/OwnersList';
import NotFoundPage from './components/common/NotFoundPage';
import NewsletterForm from './components/home/NewsletterForm';
import NewsLetter from './components/home/NewsLetter';
// import NewPetForm from './components/pets/NewPetForm';
/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
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
      // <Router>
      <div className='wrapper'>
        <Nav />
        <Routes>
          <Route
            path='/'
            element={<Home employees={employees} owners={owners} pets={pets} />}
          />
          <Route path='/staff' element={<StaffList employees={employees} />} />

          <Route path='/pets/*' element={<PetsList pets={pets} />} />
          {/* <Route path='/pets'>
              <Route index element={<PetsList pets={pets} />} />
              <Route path='dogs' element={<PetsList pets={pets} />} />
              <Route path='cats' element={<PetsList pets={pets} />} />
              <Route path='newpet' element={<NewPetForm />} />
               <Route path='*' element={<NotFoundPage />} /> 
            </Route> */}
          <Route path='/owners' element={<OwnersList owners={owners} />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/newsletter' element={<NewsLetter/>} />
        </Routes>

        <Footer />
      </div>
      //  </Router>
    );
  }
}

export default App;
