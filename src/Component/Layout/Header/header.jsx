import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import Logo from '../../../assets/images/Logo Shape.png'

import './header.scss'

export default function Header() {
  return (
    <Navbar expand="lg" className='header-container'> 
        <Container fluid>
            <Navbar.Brand href="#home">
                <div className="logo-container">
                    <div className="logo-images-holder"> 
                        <img src={Logo} alt="" />
                    </div>
                    <div className="logo-text">
                        Boldo
                    </div>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <div className="nav__list">
                <Nav className="justify-content-end nav-container" activeKey="/about">
                    <Nav.Item>
                        <Nav.Link href="#">Product</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{marginTop: '-.5rem'}}>
                        <Nav.Link href="#">
                            <Button variant="outline-secondary">Log In</Button>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
