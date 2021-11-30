import Staffer from "./Staffer";
import "./StaffList.css";
import { employees } from "../../data/employees";

export const StaffList = () => {
  const staff = employees.map((employee) => (
    <Staffer key={employee.id} employee={employee} />
  ));

  return (
    <section className="staff-list">
      <h2>Our Staff</h2>
      <div className="staffers">{staff}</div>
    </section>
  );
};

export default StaffList;
