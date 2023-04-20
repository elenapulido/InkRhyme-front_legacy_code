import React from 'react'
import Plus from '../../Assets/Img/Plus.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbars.css';

const Navbars = () => {

    const scrollToFooter = () => {
        const footer = document.getElementById('footer');
        footer.scrollIntoView({ behavior: 'smooth' });
      }

  return (
    <div>

<Navbar bg="bg-secondary" expand='md' className="mb-3 navigation">
       <Container fluid>
         <Navbar.Brand href="/Form">
        <img className='plusNavigation' src={Plus} alt='Plus Menu'/></Navbar.Brand>
         <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
         <Navbar.Offcanvas
           id="offcanvasNavbar-expand"
           aria-labelledby="offcanvasNavbarLabel-expand"
           placement="end" className="bg-secondary"
         >
           <Offcanvas.Header closeButton>
             <Offcanvas.Title id="offcanvasNavbarLabel-expand">
               {/* CELA */}
             </Offcanvas.Title>
           </Offcanvas.Header>
           <Offcanvas.Body>
             <Nav className="justify-content-end flex-grow-1 pe-3">
               <Nav.Link className="text-white" href="/">Inicio</Nav.Link>
               <Nav.Link className="text-white" href="/Form">Buscar</Nav.Link>  
               <Nav.Link className="text-white" href="#action3" onClick={scrollToFooter}>Conócenos</Nav.Link>              
             </Nav>                
           </Offcanvas.Body>
         </Navbar.Offcanvas>
       </Container>
     </Navbar>  

    </div>
  )
}

export default Navbars