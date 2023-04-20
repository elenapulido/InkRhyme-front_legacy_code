import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Plus from '../../Assets/Img/Plus.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "../../Services/AuthService";
import EventBus from "../../Common/EventBus";
import "./Navbar.css"

function Navbar1() {


  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    const handleLogout = () => {
      AuthService.logout();
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
      setCurrentUser(undefined);
    };

    EventBus.on("logout", handleLogout);

    return () => {
      EventBus.remove("logout", handleLogout);
    };
  }, []);

  const handleLogout = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>
  <Navbar bg="bg-secondary" expand='md' className="mb-3 navigation">
    <Container fluid>
      <Navbar.Brand href="/Form">
        <img className='plusNavigation' src={Plus} alt='Plus Menu' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
      <Navbar.Offcanvas
        id="offcanvasNavbar-expand"
        aria-labelledby="offcanvasNavbarLabel-expand"
        placement="end" className="bg-secondary"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel-expand">
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="mr-auto">
            {showModeratorBoard && (
              <Nav.Item>
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </Nav.Item>
            )}

            {showAdminBoard && (
              <Nav.Item>
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </Nav.Item>
            )}

            {currentUser && (
              <Nav.Item>
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </Nav.Item>
            )}
          </Nav>

          {currentUser ? (
            <Nav className="ml-auto">
              <Nav.Item>
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </Nav.Item>

              <Nav.Item>
                <a href="/login" className="nav-link" onClick={handleLogout}>
                  LogOut
                </a>
              </Nav.Item>
            </Nav>
          ) : (
            <Nav className="ml-auto">
              <Nav.Item>
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </Nav.Item>
            </Nav>
          )}
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
</div>
 );
        }
  
  export default Navbar1;

//   return (
//     <div>

//       <Navbar bg="bg-secondary" expand='md' className="mb-3 navigation">
//         <Container fluid>
//           <Navbar.Brand href="/Form">
//             <img className='plusNavigation' src={Plus} alt='Plus Menu' /></Navbar.Brand>
//           <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
//           <Navbar.Offcanvas
//             id="offcanvasNavbar-expand"
//             aria-labelledby="offcanvasNavbarLabel-expand"
//             placement="end" className="bg-secondary"
//           >
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title id="offcanvasNavbarLabel-expand">

//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <Nav className="justify-content-end flex-grow-1 pe-3">
//                 <Nav.Link className="text-white" href="/">Inicio</Nav.Link>
//                 <Nav.Link className="text-white" href="/Form">Buscar</Nav.Link>
//                 <Nav.Link className="text-white" href="/Login">Login</Nav.Link>
//                 <Nav.Link className="text-white" href="/Register">Sign Up</Nav.Link>
//               </Nav>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Container>
//       </Navbar>

//     </div>
//   )
// }




