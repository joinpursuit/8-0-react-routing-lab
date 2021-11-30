import { Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import StaffList from '../staff/StaffList';
import PetsList from '../pets/PetsList';

export const Routes = ({ employees, owners, pets }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home employees={employees} owners={owners} pets={pets} />
      </Route>
      <Route path="/staff">
        <StaffList employees={employees} />
      </Route>
      <Route path="/pets">
        <PetsList pets={pets} />
      </Route>
    </Switch>
  );
};
