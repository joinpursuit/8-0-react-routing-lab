import Nav from "../common/Nav";
import Staffer from "./Staffer";
import Footer from "../common/Footer";
import "./StaffList.css";

export const StaffList = ({ employees }) => {
  const staff = employees.map((employee) => (
    <Staffer key={employee.id} employee={employee} />
  ));

  return (
    <div>
      <section className="staff-list">
        <h2>Our Staff</h2>
        <div className="staffers">{staff}</div>
      </section>
    </div>
  );
};

export default StaffList;
