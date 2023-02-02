import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { Images, PlusCircleDotted } from 'react-bootstrap-icons';

function NavBar() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Nav className='mx-auto'>
        <NavLink className='nav-link' to='/'><Images/></NavLink>
        <NavLink className='nav-link' to='/new'><PlusCircleDotted/></NavLink>
      </Nav>
    </Navbar>
  )
}

export default NavBar