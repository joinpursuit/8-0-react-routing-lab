// import { BrowserRouter } from "react-router-dom";
import Staffer from "./Staffer";
import "./StaffList.css";
// import { BrowserRouter as Router } from "react-router-dom";

export const StaffList = ({ employees }) => {
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
