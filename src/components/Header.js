import React from "react";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// Icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import LogoImg from "../images/logo.png";
import classes from "./Header.module.css";

import { useStateValue } from "../store/StateProvider";

const Header = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        marginBottom: "40px",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <NavLink to="/">
            {" "}
            <img className={classes.logo} src={LogoImg} alt="Logo" />
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown
              title="Menu"
              id="basic-nav-dropdown"
              className={classes["dropdown-menu"]}
            >
              <NavDropdown.Item>Sofas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Chairs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Beds</NavDropdown.Item>
            </NavDropdown>
            <NavLink
              className={classes["nav-link"]}
              to="/cart"
              style={{ position: "relative" }}
            >
              <ShoppingCartIcon className="menu-icon" fontSize="medium" />
              <span className={classes["cart-items"]}>{cart.length}</span>
            </NavLink>
            <NavLink className={classes["nav-link"]}>
              <FavoriteIcon className="menu-icon" fontSize="medium" />
            </NavLink>
            <NavLink className={classes["nav-link"]}>
              <AccountCircleIcon className="menu-icon" fontSize="medium" />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
