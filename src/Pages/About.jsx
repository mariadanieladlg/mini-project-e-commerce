
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h2>About This Project</h2>
      <p>
        This is a simple e-commerce admin panel, created as a mini-project during a web development bootcamp. It's designed for basic store management.
      </p>
      <Link to="/" className="button">
        Back
      </Link>
    </>
  );
};

export default About;
