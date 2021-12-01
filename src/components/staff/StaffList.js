import Staffer from "./Staffer";
import "./StaffList.css";
import { employees } from "../../data/employees";
import { Component } from "react";

//in order to use data from employees, had to turn staff list into a class component and set a state of employees

class StaffList extends Component {
  constructor() {
    super();
    this.state = {
      employees,
    };
  }

  render() {
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
}
export default StaffList;
