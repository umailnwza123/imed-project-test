import React from 'react'
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" className="bg-light justify-content-between" >
                <Navbar.Brand style={{marginLeft: 15+'px'}}  href="#home">Nobel Prize</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        </header>

    )
}
