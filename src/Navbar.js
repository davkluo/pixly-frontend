import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Images, PlusCircleDotted } from 'react-bootstrap-icons';
import './NavBar.css';

function NavBar() {
  return (
    <>
      <Navbar className='nav-top'>
        <Container>
          <Navbar.Brand href="/" className='mx-auto'>PIXLY</Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className='nav-bot fixed-bottom'>
        <Container>
          <Nav className='mx-auto'>
              <Nav.Link className="me-2" as={NavLink} to='/'><Images />GALLERY</Nav.Link>
              <Nav.Link as={NavLink} to='/new'><PlusCircleDotted />UPLOAD</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;