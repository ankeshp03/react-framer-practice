import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand as={Link} to="/">
        Navbar
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="about">
          About
        </Nav.Link>
        <Nav.Link as={Link} to="blog">
          Blog
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
