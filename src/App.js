import React from 'react';
import { Routes } from './components/common/Routes';

/*
  Components
*/
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';

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
      <div className="wrapper">
        <Nav />
        <Routes employees={employees} owners={owners} pets={pets} />
        <Footer />
      </div>
    );
  }
}

export default App;
