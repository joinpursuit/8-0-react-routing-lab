import Staffer from "./Staffer";
import "./StaffList.css";
import { Component } from "react";
import employees from "../../data/employees";

class StaffList extends Component {
  constructor() {
    super();
    this.state = {
      employees,
    };
  }
  render() {
    const { employees } = this.state;
    const staff = employees.map((employee) => (
      <Staffer key={employee.id} employee={employee} />
    ));

    return (
      <section className="staff-list">
        <h2>Our Staff</h2>
        <div className="staffers">{staff}</div>
      </section>
    );
  }
}

export default StaffList;
