import React from "react";
import { Link } from "gatsby";
import "../css/main.css";
import logo from "../img/icthub.png";
import { useState } from "react";
import styled from "styled-components";

// for the mobile nav
const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  z-index: 5;
  cursor: pointer;
  div {
    width: 1.5rem;
    height: 0.2rem;
    border-radius: 5px;
    transform-origin: 1px;
    background-color: black;
    position: relative;
  }
`;
const Menulinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50vh;
  width: 80vh;
  position: fixed;
  background: rgb(154, 144, 144);
  top: 0;
  right: 0;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};

  ul {
    list-style-type: none;
  }
  li {
    margin-top: 1rem;
  }
  a {
    color: black;
    font-size: 1.5rem;

    :hover {
      color: blue;
    }
  }
`;

// delet the top coding if mobile nav not working
const Navbar = () => {
  const [nav, showNav] = useState(false);
  return (
    <navbar className="Navbar">
      <div className="mobile">
        <Link to="/">
          <img src={logo} alt="logo" height="28px" width="120px" />
        </Link>

        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          onclick="myFunction()"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="MobileNavbar__Burger-y1jbhm-7 gLYfWE"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg> */}
      </div>
      <div className="Navbarcontext">
        <Link to="/">
          <img src={logo} alt="logo" height="28px" width="120px" />
        </Link>

        <Link to="/">Home</Link>
        <div>
          <div class="dropdown">
            <Link to="/about">About us</Link>
            <svg height="15" width="15">
              <polyline
                onclick="myFunction()"
                class="dropbtn"
                points="3 6 9 12 15 6"
              ></polyline>
            </svg>

            <div className="Frame2_1">
              <div class="dropdown-content">
                <Link to="/chooseicthub">Why choose ict hub</Link>
                <Link to="/story">stories</Link>
                <Link to="/carrer">career</Link>
                <Link to="/blog">blog</Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="dropdown">
            <Link to="/about">Unified Communications</Link>
            <svg height="15" width="15">
              <polyline
                onclick="myFunction()"
                class="dropbtn"
                points="3 6 9 12 15 6"
              ></polyline>
            </svg>

            <div className="Frame2_1">
              <div class="dropdown-content">
                <Link to="/chooseicthub">Why choose ict hub</Link>
                <Link to="/story">stories</Link>
                <Link to="/carrer">career</Link>
                <Link to="/blog">blog</Link>
              </div>
            </div>
          </div>
        </div>
        <Link to="/it">IT & Cloud</Link>
        <Link to="/customer">Customer Center</Link>
        <Link to="/business">Business Internet</Link>
        <div>
          <div class="dropdown">
            <Link to="/about">Voice</Link>
            <svg height="15" width="15">
              <polyline
                onclick="myFunction()"
                class="dropbtn"
                points="3 6 9 12 15 6"
              ></polyline>
            </svg>

            <div className="Frame2_1">
              <div class="dropdown-content">
                <Link to="/chooseicthub">Why choose ict hub</Link>
                <Link to="/story">stories</Link>
                <Link to="/carrer">career</Link>
                <Link to="/blog">blog</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for the mobile navigataion */}

      <div className="Mobilecontext">
        <div>
          <MenuIcon onClick={() => showNav(!nav)}>
            <div />
            <div />
            <div />
          </MenuIcon>

          <Menulinks nav={nav}>
            <Link to="/">Home</Link>
            <div>
              <div class="dropdown">
                <Link to="/about">About us</Link>
                <svg height="15" width="15">
                  <polyline
                    onclick="myFunction()"
                    class="dropbtn"
                    points="3 6 9 12 15 6"
                  ></polyline>
                </svg>

                <div className="Frame2_1">
                  <div class="dropdown-content">
                    <Link to="/chooseicthub">Why choose ict hub</Link>
                    <Link to="/story">stories</Link>
                    <Link to="/carrer">career</Link>
                    <Link to="/blog">blog</Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="dropdown">
                <Link to="/about">Unified Communications</Link>
                <svg height="15" width="15">
                  <polyline
                    onclick="myFunction()"
                    class="dropbtn"
                    points="3 6 9 12 15 6"
                  ></polyline>
                </svg>

                <div className="Frame2_1">
                  <div class="dropdown-content">
                    <Link to="/chooseicthub">Why choose ict hub</Link>
                    <Link to="/story">stories</Link>
                    <Link to="/carrer">career</Link>
                    <Link to="/blog">blog</Link>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/it">IT & Cloud</Link>
            <Link to="/customer">Customer Center</Link>
            <Link to="/business">Business Internet</Link>
            <div>
              <div class="dropdown">
                <Link to="/about">Voice</Link>
                <svg height="15" width="15">
                  <polyline
                    onclick="myFunction()"
                    class="dropbtn"
                    points="3 6 9 12 15 6"
                  ></polyline>
                </svg>

                <div className="Frame2_1">
                  <div class="dropdown-content">
                    <Link to="/chooseicthub">Why choose ict hub</Link>
                    <Link to="/story">stories</Link>
                    <Link to="/carrer">career</Link>
                    <Link to="/blog">blog</Link>
                  </div>
                </div>
              </div>
            </div>
          </Menulinks>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
