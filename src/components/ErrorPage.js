import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Not Found.</h1>
      <h2>
        <Link to="/">Go home</Link>
      </h2>
    </div>
  );
};

export default ErrorPage;
