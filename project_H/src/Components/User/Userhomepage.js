import React from 'react';
import { Navbar, Container, Row, Col, Card } from 'react-bootstrap';
import logo from '../../Assets/Logo.png';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faUsers, faCalendar, faCalendarCheck, faCalendarTimes } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import Clock from '../Clock'; // Importing Clock component
import 'react-calendar/dist/Calendar.css';
import Textarea from './Textarea';
import Error from '../Siginup/Error';

library.add(faUser, faUsers, faCalendar, faCalendarCheck, faCalendarTimes);

function Userhomepage() { // User homepage component
    return (
      <>
    <Container className='mt-3'>
      <Navbar bg="" data-bs-theme="dark" className='navbar'>
        <Container>
          <Navbar.Brand href="#home" className='navbox'>
            <img src={logo} alt="" className='logo'/>
            <div>
              <button class="Btn">
                <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg>
                </div>
                <div class="text">Logout</div>
              </button>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>

      
      <Container>
        <Row>
        <Col lg={6}>
        <Clock />
        </Col>
        <Col lg={6}>
        <button className="button3">
          <span>leave</span>
        </button>
        </Col>       
        </Row>
      </Container>
      
      
      <Row className='mt-4'>
      <Col lg={0}></Col>
      <Col lg={3}>
                                               { /* maincard */ }
      <div class="card1">
        <div class="card1-info">
          <div class="card1-avatar">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <h1>421</h1>
                <p>Total Empolyeses</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faUser} size="xl" />
              </div>
            </div>           
          </div>
        </div>
            <button className="button2">
              <span>Attendence</span>
            </button>
      </div> 
      </Col>
                                                  {/* subcard */}
      <Col lg={8}>
        <Row >
        <Col lg={4}>
        <div class="card4">
        <div class="card4-info">
        <div class="card4-avatar">
            <div>
            <h1>421</h1>
            <p>Total Empolyeses</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faUser} size="xl" />
            </div>
          </div>
        </div>
        </div>
        </Col>
        <Col lg={4}>
        <div class="card4">
        <div class="card4-info">
        <div class="card4-avatar">
          <div>
            <h1>42</h1>
            <p>On Time</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUser} size="xl" />
          </div>
        </div>
        </div>
        </div>
        </Col>
        <Col lg={4}>
        <div class="card4">
        <div class="card4-info">
        <div class="card4-avatar">
          <div>
            <h1>3</h1>
            <p>Absent</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUser} size="xl" />
          </div>
        </div>
        </div>
        </div>
        </Col>
        </Row>
        <Row className='sub1'>
        <Col lg={4}>
        <div class="card4">
        <div class="card4-info">
        <div class="card4-avatar">
          <div>
            <h1>70</h1>
            <p>Late Arrival</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUser} size="xl" />
          </div>
        </div>
        </div>
        </div>
        </Col>
        <Col lg={4}>
        <div class="card4">
        <div class="card4-info">
        <div class="card4-avatar">
        <div>
            <h1>20</h1>
            <p>Early Depatures</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUser} size="xl" />
          </div>
        </div>
        </div>
        </div>
        </Col>
        <Col lg={4}>
        <div class="card4">
        <div class="card4-info">
        <div class="card4-avatar">
        <div>
            <h1>21</h1>
            <p>Time off</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUser} size="xl" />
          </div>
        </div>
        </div>
        </div>
        </Col>
        </Row>      
      </Col>
      </Row>
      <Row>
        <Col lg={4}></Col>
        <Col lg={4}></Col>
        <Col lg={4}>
          <Textarea/>
          {/* <Error/> */}
        </Col>
      </Row>
    </Container>

  </>
    )
}

export default Userhomepage;

