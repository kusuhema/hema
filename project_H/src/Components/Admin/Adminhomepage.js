import React from 'react';
import {Navbar,Container,Row,Col,Card,} from 'react-bootstrap';
import logo from '../../Assets/Logo.png';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faUsers, faCalendar, faCalendarCheck, faCalendarTimes } from '@fortawesome/free-solid-svg-icons'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import  {useNavigate} from 'react-router-dom';
// import Cardd from './Cardd';

library.add(faUser, faUsers, faCalendar, faCalendarCheck, faCalendarTimes)

function Adminhomepage() {
  // ----------------registration buttion--------
  const navigate = useNavigate();
  const registerHandler = () => {
        navigate('/Registration');
    }
    // ----------------registration buttion--------
    return (
  <>
    <Container className='mt-3'>
      <Navbar bg="" data-bs-theme="dark" className='navbar'>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" className='logo'/>
            </Navbar.Brand>
        </Container>
      </Navbar>
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
            <button className="button1">
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
        <Col>
          <div className='Cal'>
            <Calendar />
          </div>
        </Col>
        <Col>
          <div class="newuser">
          <div class="card-border-top"></div>
          <div class="img">
          </div>
          <span> New Empolyee</span>
          <p class="job"> Registration</p>
          <button onClick={registerHandler}> Add</button>
          </div>
        </Col>
      </Row>
    </Container>
  </>
    );
}

export default Adminhomepage;
