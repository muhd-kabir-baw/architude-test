import React,  { useState, useEffect } from 'react';
import logo from './img/logo.png';

import scissors from './img/scissors.png';
import salon from './img/salon.jpg';

import greenDots from './img/green-dots.png';
import logoAff1 from './img/logoAff1.png';
import logoAff2 from './img/logoAff2.png';
import logoAff3 from './img/logoAff3.png';
import logoAff4 from './img/logoAff4.png';
import logoAff5 from './img/logoAff5.png';

import person from './img/person.jpg';

import cutAndWash from './img/cut-and-wash.jpg';
import perm from './img/perm.jpg';
import hairTreatment from './img/hair-treatment.jpg';

import haircutCollage from './img/haircut-collage.png';


import axios from "axios";

import { API_URL } from "./constants/index";


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StarFill,Star,StarHalf } from 'react-bootstrap-icons';
import { Navbar, Nav, Container, Row, Col, Button, Form, FormControl} from 'react-bootstrap';

function NavBar(){
  return (
    <Navbar className="custom-nav-bg" expand="md">
      <Navbar.Brand href="#home"><img className="logo" alt ="logoImg" src={logo} bsPrefix="notImg"></img></Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav variant="default" className="textColor">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

function StartBlurb(){
  return(
    <Container fluid className="startBlurb">
      <Row>
        <Col>
          <Container className="container">
            <Row className="smText">
              <img className="scissors" alt="scissorsIcon" src={scissors}></img>
              <span>
                SALON IN DEMAND
              </span>
            </Row>
            <Row className="lgText">
              <h2> 
                Be confident with your stylish hair cut with us!
              </h2>
            </Row>
            <Row className="mdText">
              <span>
                Contact us and get your first 15% discount from us!
              </span>
            </Row>
            <Row className="btn-cont">
              <Button variant="primary" className="servicesBtn">
                View Services
              </Button>
            </Row>
          </Container>
        </Col>
        <Col>
          <img className="salon" alt="salongImg" src={salon}></img>
        </Col>
      </Row>
    </Container>
  )
}

function FeaturedIn(){
  return(
    <Container fluid className="featuredInCont">
      <Row>
        <Col>
          <div>
            <img  className="greenDots" alt ="greenDotsImg" src={greenDots}>
            </img>
            <h5 className="featuredIn">
              <span>
                featured in
              </span>
            </h5>
          </div>
        </Col>
        <Col>
          <img  className="logoAff1" alt ="logoAff1" src={logoAff1}>
          </img>
        </Col>
        <Col>
          <img  className="logoAff2" alt ="logoAff2" src={logoAff2}>
          </img>
        </Col>
        <Col>
          <img  className="logoAff3" alt ="logoAff3" src={logoAff3}>
          </img>
        </Col>
        <Col>
          <img  className="logoAff4" alt ="logoAff4" src={logoAff4}>
          </img>
        </Col>
        <Col>
          <img  className="logoAff5" alt ="logoAff5" src={logoAff5}>
          </img>
        </Col>
      </Row>
    </Container>
  )
}

function RatingsAndReviews(){
  return(
    <Container className="ratingsAndReviews">
      <Row>
        <Col className="gReviews">
          <Row>
            <h1>4.8</h1>
          </Row>
          <Row>
            <StarFill className="starIcon" />
            <StarFill className="starIcon" />
            <StarFill className="starIcon"  />
            <StarFill className="starIcon" />
            <StarHalf className="starIcon" />
          </Row>
          <Row>
            <span>2,394 Ratings</span>
          </Row>
          <Row>
            <span>Google Services</span>
          </Row>
        </Col>
        <Col className="studReviews">  
          <Row>
            <h1>A+</h1>
          </Row>
          <Row>
            <StarFill className="starIcon" />
            <StarFill className="starIcon" />
            <StarFill className="starIcon"  />
            <StarFill className="starIcon" />
            <StarHalf className="starIcon" />
          </Row>
          <Row>
            <span>125 Student Reviews</span>
          </Row>
          <Row>
            <span>530 Ratings</span>        
          </Row>
        </Col>
        <Col className="blurb" xs={6}>       
          <Row>
            <h1 className="blurbText">
              Trusted by over 7000 happy customers and counting!
              Visit us right now!
            </h1>
          </Row>
          <Row>
            <Col>
              <Row>                
                <h5 className="name">Jessica Tan</h5>
              </Row>
              <Row>
                <span>
                  I have been following this salon and I'm happy with their service and haircuts. They're the best!
                </span>
              </Row>
            </Col>
            <Col>
              <img className="person" alt="personImg" src ={person}></img>
            </Col>
          </Row> 
        </Col>
      </Row>
    </Container>
  )
}

function MidBlurb(){
  return(
    <Container className="midBlurb" fluid>
      <Row className="topHalf">
        <Col xs={8} className="topHalfText" >
          <Row >
            <span>CHANGE YOUR HAIR</span>
          </Row>
          <Row >
            <h1 className="title">
              Start Your Journey of Having Happy Hair & Stylist Cut!
            </h1>
          </Row>
        </Col>
        <Col className="topHalfBtn">
          <Button variant="primary" className="servicesBtn">View Services</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <img className="cutAndWash" alt="cutAndWashImg" src={cutAndWash}></img>
          </Row>
          <Row>
            <h5 className="sectionTitle">Cut & Wash</h5>
          </Row>
          <Row>
            <span className="sectionTxt">Giving you the best service, with a cut of your choice, and together with a with our top notch shampoo products.</span>
          </Row> 
        </Col>
        <Col>
          <Row>
            <img className="perm" alt="permImg" src={perm}></img>
          </Row>
          <Row>
            <h5 className="sectionTitle">Perm</h5>
          </Row>
          <Row>
            <span className="sectionTxt">For those who want to get those curls up and going!</span>
          </Row> 
        </Col>
        <Col>
          <Row>
            <img className="hairTreatment" alt="hairTreatmentImg" src={hairTreatment}></img>
          </Row>
          <Row>
            <h5 className="sectionTitle">Hair Treatment</h5>
          </Row>
          <Row>
            <span className="sectionTxt">We will analyse your hair condition and give you the best treatment for your hair to grow healthily.</span>
          </Row> 
        </Col>
      </Row>
    </Container>
  )
}

function EndBlurb(){
  return(
    <Container className="endBlurb" fluid>
        <Row>
          <Col className="endBlurbLeft">
            <Row>
              <h1>Happy Faces of Happy Customers</h1> 
            </Row>
            <Row>
              <span>Customers are happy with our services and with our staff! See what they say about us!</span>
            </Row>
            <Row>
              <Button variant="primary" className="testimonialsBtn">View All Testimonials</Button>
            </Row>
          </Col>
          <Col>
          </Col>
          <Col xs={6} className="endBlurbRight">
             <img className="haircutCollage" alt="haircutCollageImg" src={haircutCollage}></img>   
          </Col>
        </Row>
    </Container>
  )
}


const initialFormData = Object.freeze({
  name: "",
  email: "",
  subject: "",
  message: ""
});

function ContactForm(){

  const [formData,setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);    
    axios.post(API_URL, formData);
    // ... submit to API or something
  };
    
  return(
    <Container fluid>
      <Row>
        <Col>
          <div className="d-flex justify-content-start">            
            <h1 className = "contactUs">
              Contact us:
            </h1>
          </div>
        </Col>
        <Col>
          <div className="form">
            <Form>
              <Form.Group controlId="formResponsiveName">
                <Form.Control name="name" type="text" placeholder="Name" onChange={handleChange}  />
              </Form.Group>

              <Form.Group controlId="formResponsiveEmail">
                <Form.Control name="email" type="email" placeholder="Email Address" onChange={handleChange}  />
              </Form.Group>

              <Form.Group controlId="formResponsiveSubject">
                <Form.Control name="subject" type="text" placeholder="Subject" onChange={handleChange}  />
              </Form.Group>

              <Form.Group controlId="formResponsiveTextArea">
                <Form.Control as="textarea" name="message" rows={3} placeholder="Your Message" onChange={handleChange}  />
              </Form.Group>
              <Button variant="primary" onClick ={handleSubmit} type="submit" className="sendBtn">
                Send Message
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

function ContactFormFooter(){
  return(
    <Container fluid className="footer">
      <div className="newsletter d-flex justify-content-center">
        <h1> Subscribe to Newsletter</h1>
      </div>
      <div className="text d-flex justify-content-center">        
        <span>Enter your email address to register to our newsletter subscription delivered on regular basis</span>
      </div>
    </Container>
  )
}

//Don't forget to attribute logo in a separate page
//<a href='https://pngtree.com/so/leaf-clipart'>leaf clipart png from pngtree.com</a>

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar />
      </div>
      <div className="body">
        <StartBlurb />
        <FeaturedIn />
        <RatingsAndReviews />
        <MidBlurb />
        <EndBlurb />
        <ContactForm />
      </div> 
      <div className="footer">
        <ContactFormFooter />
      </div>
    </div>
  );
}

export default App;
