import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Header from './Header'

export default class Navig extends React.Component {
    render() {    
        return (
            <div>
            <Header />

            <Navbar bg="dark" variant="dark">
                   
                    <Nav className="mr-auto">
                        <LinkContainer to="/home">
                            <Nav.Link>home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link to="/contact">Contact</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/aboutMe">
                            <Nav.Link to="/aboutMe">About me</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    
        
            </Navbar>
            
            </div>
        );
    }
}