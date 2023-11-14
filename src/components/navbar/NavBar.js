import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

function ContainerOutsideExample() {
    return (
        <Container>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">JayLinks</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    );
}

export default ContainerOutsideExample;
// import Nav from 'react-bootstrap/Nav';

// function FillExample() {
//     return (
//         <div className='container'>
//             <Nav fill variant="tabs" defaultActiveKey="/home">
//                 <Nav.Item>
//                     <Nav.Link href="/home">Active</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link eventKey="link-2">Link</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link eventKey="disabled" disabled>
//                         Disabled
//                     </Nav.Link>
//                 </Nav.Item>
//             </Nav>
//         </div>
//     );
// }

// export default FillExample;

// function CollapsibleExample() {
//     return (
//         <Navbar fixed='top' collapseOnSelect expand="lg" className="bg-body-tertiary container">
//             <Container>
//                 <Navbar.Brand href="#home">JayLinks</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link href="#features">Features</Nav.Link>
//                         <Nav.Link href="#pricing">Pricing</Nav.Link>
//                         <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//                             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.2">
//                                 Another action
//                             </NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action/3.4">
//                                 Separated link
//                             </NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                     <Nav>
//                         <Nav.Link href="#deets">More deets</Nav.Link>
//                         <Nav.Link eventKey={2} href="#memes">
//                             Dank memes
//                         </Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default CollapsibleExample;