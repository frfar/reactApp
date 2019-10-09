import React from"react"
import {Component} from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
//import * from 'react-bootstrap'

//importing the pages
import MainPage from './pages/index.jsx'

function Header(){
    
    return(
        
        <header className="headbar">Frank Amiri</header>
            
    );

}

export default Header;