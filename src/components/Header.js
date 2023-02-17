import React, { useEffect } from 'react'
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css'
import {useDispatch, useSelector } from 'react-redux';


export default function Header() {
    const NobelPrizeReducer = useSelector(({NobelPrizes}) => NobelPrizes)
    useEffect(() => {
        if(NobelPrizeReducer.selectedYear.length > 0){
            let year = []
             NobelPrizeReducer.selectedYear.forEach((element)=>{
                year.push(element.year)
             })   
            //  console.log('year', year)
        }
    }, [NobelPrizeReducer])
    return (
        <div className="header-main">
            <h1>
                Nobel Prize
            </h1>
            <label>
                1905
            </label>
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
