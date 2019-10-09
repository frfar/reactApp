import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Contact from './Contact'

export default class contactP extends React.Component {
    constructor(props){
        super(props)
        //binding the appropriate elements
        this.handleSubmit = this.handleSubmit.bind(this);
        
        
        //state information
        this.state = {
          name1: '',
          email: '',
          company: '',
          response: '',
          responseToPost: '',
          info:[]
        };
        
    
      }
      //this handle the changes of states
    handleChange = event => this.setState({name1: event.target.value})
    handleChange1 = event => this.setState({email: event.target.value})
    handleChange2 = event => this.setState({company: event.target.value})
    handleSubmit = async event => {
        event.preventDefault();
        const response = await fetch('/api/world', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          info: [this.state.name1, this.state.email, this.state.company],
          body: JSON.stringify({ info: this.state.info })
         
        });
        const body = await response.text();
    

        console.log("name ", this.state.name1);
        console.log("email " ,this.state.email)
        console.log("company ",this.state.company)

    }

    render(){
        return (
            <div>
                
                <Contact name1={this.state.name1} name1Onchange={this.handleChange} 
                email={this.state.email} emailOnchange={this.handleChange1} 
                company={this.state.company} companyOnchange={this.handleChange2}/>  
                
                <form onSubmit={this.handleSubmit}>
                <button type="submit">Submit</button>            
                </form>
            
                
            </div>
        );
    };
}
