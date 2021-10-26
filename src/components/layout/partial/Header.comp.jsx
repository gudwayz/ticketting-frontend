import React from 'react'
import { Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import logo from '../../../assets/img/pass.JPG'

const Header = () => {
    return (
        <Navbar
        collapsOnSelect
        bg="info"
        variant="dark"
        expand="md">
            <NavbarBrand>
                <img src={logo} alt="logo" width="50px"/>
            </NavbarBrand>
            <NavbarToggle aria-controls="basic-navbar-nav"/>
            <NavbarCollapse id="basic-navbar-nav">
                <Nav className="ml-1">
                    <NavLink href="/dashboard">Dashboard</NavLink>
                    <NavLink href="/dashboard">Ticket</NavLink>
                    <NavLink href="/dashboard">Logout</NavLink>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    )
}

export default Header
