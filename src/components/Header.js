import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const MotionLink = motion(Link);
  const initial = {
      y: -50,
      opacity: 0
    },
    animate = {
      y: 0,
      opacity: 1
    },
    transition = {
      duration: 0.7,
      // type: "spring",
      // stiffness: 100
    };
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand as={Link} to="/">
        Navbar
      </Navbar.Brand>
      <Nav className="ml-auto">
        <MotionLink
          to="/"
          className="nav-link"
          initial={initial}
          animate={animate}
          transition={transition}
        >
          Home
        </MotionLink>
        <MotionLink
          to="about"
          className="nav-link"
          initial={initial}
          animate={animate}
          transition={{
            ...transition,
            delay: 0.1
          }}
        >
          About
        </MotionLink>
        <MotionLink
          to="blog"
          className="nav-link"
          initial={initial}
          animate={animate}
          transition={{
            ...transition,
            delay: 0.2
          }}
        >
          Blog
        </MotionLink>
      </Nav>
    </Navbar>
  );
};

export default Header;
