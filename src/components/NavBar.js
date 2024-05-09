import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../__assets__/images/AFLogo.jpeg';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
                        <img loading='lazy' height={20} src={logo} alt="Acti Fitness Logo" />{' '}
                        <span>ACTI FITNESS</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav activeKey={window.location.pathname} className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about" >About</Nav.Link>
                            <Nav.Link href="/workouts" >Workouts</Nav.Link>
                            <Nav.Link href="/meals" >Meals</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;