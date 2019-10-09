import React from "react"
import {Component} from "react"
import './App.css';
import Header from "./Components/Header.js"
//import Contact from "./Components/pages/Contact.js/index.js"
import { loadReCaptcha } from 'react-recaptcha-v3'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import MainPage from './Components/pages/index.jsx'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import notFoundPage from './Components/pages/404.jsx'
import contactP from './Components/pages/contacP.jsx'
import { LinkContainer } from 'react-router-bootstrap'
import Navig from './Components/Navig'
import abtMe from './Components/pages/abtMe.jsx'



class App extends Component {
  //here is the constructor
  constructor(props){
    super(props)
    //binding the appropriate elements
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.recapchaLoaded = this.recapchaLoaded.bind(this);
    
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
  
  //content for the recaptcha
  verifyCallback = (recaptchaToken) => {
    // Here you will get the final recaptchaToken!!!  
    console.log(recaptchaToken, "<= your recaptcha token")
  }
  //this handle the changes of states
  handleChange = event => this.setState({name1: event.target.value})
  handleChange1 = event => this.setState({email: event.target.value})
  handleChange2 = event => this.setState({company: event.target.value})
  
  recapchaLoaded() {
    console.log('captcha successfully loaded');
  }

  componentDidMount() {
    //call our fetch function below once the component mounts
    loadReCaptcha('6LeacrsUAAAAANxWwyss8BQzOFYkHBHFib-YAx7b');
    this.callAPI()
      .then(res => this.setState({data: res.express}))
      .catch(err => console.log(err));

  }

  //fethc our GET route from the Express server. note the path we are
  //fetching matches the express server.js
  callAPI = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if(response.status !== 200) {
      throw Error(body.message)

    }
    return body;
  }
  //when we submit this occurs handles
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

    
   
  };

  
  

  render(){
    
    return (
      
      
      <Router>
        <div>
        <Navig/>
        <Switch>
        
        <Route exact path="/" component = {MainPage}/>
          <Route exact path="/home" component = {MainPage}/>
          <Route exact path="/aboutMe"component={abtMe}/>
          <Route exact path="/contact"component={contactP}/>
          <Route component={notFoundPage}/>
        
        
        
          
            
        </Switch> 
        </div> 
      </Router>

    )
  }
}

export default App;