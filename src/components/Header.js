import React, { useEffect } from 'react'
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css'


export default function Header() {
    useEffect(() => {
        console.log(document.getElementsByClassName('header-main')[0].offsetHeight)
    }, [])
    return (
        <div className="header-main">
            <h1>
                Nobel Prize
            </h1>
        </div>
        // <header className='header-main'>
        //     <Navbar bg="dark" variant="dark" className="bg-light justify-content-between" >
        //         <Navbar.Brand style={{marginLeft: 15+'px'}}  href="#home">Nobel Prize</Navbar.Brand>
        //         <Nav className="me-auto">
        //             <Nav.Link href="#home">Home</Nav.Link>
        //             <Nav.Link href="#features">Features</Nav.Link>
        //             <Nav.Link href="#pricing">Pricing</Nav.Link>
        //         </Nav>
        //     </Navbar>
        // </header>

    )
}
