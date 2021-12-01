import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../home/Home';
import StaffList from '../staff/StaffList';
import PetsList from '../pets/PetsList';

export const Routings = ({ employees, owners, pets }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home employees={employees} owners={owners} pets={pets} />}
      />
      <Route path="staff" element={<StaffList employees={employees} />} />
      <Route path="/pets" element={<Navigate to="/pets/cats" />} />
      <Route path="/pets/:cats" element={<PetsList pets={pets} />} />
      <Route path="/pets/:dogs" element={<PetsList pets={pets} />} />
    </Routes>
  );
};
