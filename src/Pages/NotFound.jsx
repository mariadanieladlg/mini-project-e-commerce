import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="profile-btn">
        Back
      </Link>
    </>
  );
};

export default NotFound;
