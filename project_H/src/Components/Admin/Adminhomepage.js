// import React from 'react';
// import {Navbar,Container,Row,Col,Card,} from 'react-bootstrap';
// import logo from '../../Assets/Logo.png';
// import './admin.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUser, faUsers, faCalendar, faCalendarCheck, faCalendarTimes } from '@fortawesome/free-solid-svg-icons'
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
// import  {useNavigate} from 'react-router-dom';
// // import Cardd from './Cardd';

// library.add(faUser, faUsers, faCalendar, faCalendarCheck, faCalendarTimes)

// function Adminhomepage() {
//   // ----------------registration buttion--------
//   const navigate = useNavigate();
//   const registerHandler = () => {
//         navigate('/Registration');
//     }
//     // ----------------registration buttion--------
//     return (
//   <>
//     <Container className='mt-3'>
//       <Navbar bg="" data-bs-theme="dark" className='navbar'>
//         <Container>
//           <Navbar.Brand href="#home">
//             <img src={logo} alt="" className='logo'/>
//             </Navbar.Brand>
//         </Container>
//       </Navbar>
//       <Row className='mt-4'>
//       <Col lg={0}></Col>
//       <Col lg={3}>
//                                                { /* maincard */ }
//       <div class="card1">
//         <div class="card1-info">
//           <div class="card1-avatar">
//           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <div>
//                 <h1>421</h1>
//                 <p>Total Empolyeses</p>
//               </div>
//               <div>
//                 <FontAwesomeIcon icon={faUser} size="xl" />
//               </div>
//             </div>           
//           </div>
//         </div>
//             <button className="button1">
//               <span>Attendence</span>
//             </button>
//       </div> 
//       </Col>
//                                                   {/* subcard */}
//       <Col lg={8}>
//         <Row >
//         <Col lg={4}>
//         <div class="card4">
//         <div class="card4-info">
//         <div class="card4-avatar">
//             <div>
//             <h1>421</h1>
//             <p>Total Empolyeses</p>
//             </div>
//             <div>
//             <FontAwesomeIcon icon={faUser} size="xl" />
//             </div>
//           </div>
//         </div>
//         </div>
//         </Col>
//         <Col lg={4}>
//         <div class="card4">
//         <div class="card4-info">
//         <div class="card4-avatar">
//           <div>
//             <h1>42</h1>
//             <p>On Time</p>
//           </div>
//           <div>
//             <FontAwesomeIcon icon={faUser} size="xl" />
//           </div>
//         </div>
//         </div>
//         </div>
//         </Col>
//         <Col lg={4}>
//         <div class="card4">
//         <div class="card4-info">
//         <div class="card4-avatar">
//           <div>
//             <h1>3</h1>
//             <p>Absent</p>
//           </div>
//           <div>
//             <FontAwesomeIcon icon={faUser} size="xl" />
//           </div>
//         </div>
//         </div>
//         </div>
//         </Col>
//         </Row>
//         <Row className='sub1'>
//         <Col lg={4}>
//         <div class="card4">
//         <div class="card4-info">
//         <div class="card4-avatar">
//           <div>
//             <h1>70</h1>
//             <p>Late Arrival</p>
//           </div>
//           <div>
//             <FontAwesomeIcon icon={faUser} size="xl" />
//           </div>
//         </div>
//         </div>
//         </div>
//         </Col>
//         <Col lg={4}>
//         <div class="card4">
//         <div class="card4-info">
//         <div class="card4-avatar">
//         <div>
//             <h1>20</h1>
//             <p>Early Depatures</p>
//           </div>
//           <div>
//             <FontAwesomeIcon icon={faUser} size="xl" />
//           </div>
//         </div>
//         </div>
//         </div>
//         </Col>
//         <Col lg={4}>
//         <div class="card4">
//         <div class="card4-info">
//         <div class="card4-avatar">
//         <div>
//             <h1>21</h1>
//             <p>Time off</p>
//           </div>
//           <div>
//             <FontAwesomeIcon icon={faUser} size="xl" />
//           </div>
//         </div>
//         </div>
//         </div>
//         </Col>
//         </Row>      
//       </Col>
//       </Row>
//       <Row>
//         <Col>
//           <div className='Cal'>
//             <Calendar />
//           </div>
//         </Col>
//         <Col>
//           <div class="newuser">
//           <div class="card-border-top"></div>
//           <div class="img">
//           </div>
//           <span> New Empolyee</span>
//           <p class="job"> Registration</p>
//           <button onClick={registerHandler}> Add</button>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   </>
//     );
// }

// export default Adminhomepage;






import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Card from 'react-bootstrap/Card';
import  sales from '../../Assets/images.jpg'; 
import logo from '../../Assets/Logo.png';
 
 function Adminhomepage() {


  
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };


  
  const [selectedDate, setSelectedDate] = useState(null);


   return (
      <>
       {/* First Section */}



       {/* <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MM/dd/yyyy"
        placeholderText="Select a date"
      /> */}

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-4'>

        

<div className="app-container">
      <div className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          {/* Add more links as needed */}
        </ul>
      </div>
      <div className="content">
         
        {/* Your main content goes here */}
      </div>
    </div>

    </div>



    <div className='col-8'> 


       <div className='container'>
       <div className='row my-5'>


        <div className='col-lg-9 col-md-6 col-sm-12 mb-3'>
        <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MM/dd/yyyy"
        placeholderText="Select a date"
      />
        </div>

        <div className='col-lg-3 col-md-6 col-sm-12'>
        {/* <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MM/dd/yyyy"
        placeholderText="Select a date"
      /> */}
      <h5>Recent Updates</h5>
        </div>
  

       <div className='col-lg-3  col-md-6 col-sm-12  '>
       

       <Card  style={{Border:'none'}}>
            <Card.Body>
              <img src={sales} alt={sales} className='img-fluid'  style={{height:'90px',width:'150px'}} />



              <div className='container'>
                <div className='row'>
                  <div className='col-7'>
                   <Card.Title>Total Sales</Card.Title>
                   <Card.Title>$25,789</Card.Title>
                   <Card.Subtitle className="mb-2 text-muted">Last 24 hours</Card.Subtitle>

                  </div>
                  <div className='col-5 mt-4'>

                  <img src={logo} alt={sales} className='img-fluid'/>
                    
                  </div>

                </div>
               </div>
              {/* <Card.Title>Total Sales</Card.Title>
              <Card.Title>$25,789</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Last 24 hours</Card.Subtitle> */}
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
          </Card>
        </div>

        <div className='col-lg-3  col-md-6 col-sm-12'>

        <Card  style={{Border:'none'}}>
            <Card.Body>
              <img src={sales} alt={sales} className='img-fluid'  style={{height:'90px',width:'150px'}} />



              <div className='container'>
                <div className='row'>
                  <div className='col-7'>
                   <Card.Title>Total Sales</Card.Title>
                   <Card.Title>$25,789</Card.Title>
                   <Card.Subtitle className="mb-2 text-muted">Last 24 hours</Card.Subtitle>

                  </div>
                  <div className='col-5 mt-4'>

                  <img src={logo} alt={sales} className='img-fluid'/>
                    
                  </div>

                </div>
               </div>
              {/* <Card.Title>Total Sales</Card.Title>
              <Card.Title>$25,789</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Last 24 hours</Card.Subtitle> */}
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
          </Card>
        
        </div>


        <div className='col-lg-3 col-md-6 col-sm-12 '>
        <Card  style={{Border:'none'}}>
            <Card.Body>
              <img src={sales} alt={sales} className='img-fluid'  style={{height:'90px',width:'150px'}} />



              <div className='container'>
                <div className='row'>
                  <div className='col-7'>
                   <Card.Title>Total Sales</Card.Title>
                   <Card.Title>$25,789</Card.Title>
                   <Card.Subtitle className="mb-2 text-muted">Last 24 hours</Card.Subtitle>

                  </div>
                  <div className='col-5 mt-4'>

                  <img src={logo} alt={sales} className='img-fluid'/>
                    
                  </div>

                </div>
               </div>
              {/* <Card.Title>Total Sales</Card.Title>
              <Card.Title>$25,789</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Last 24 hours</Card.Subtitle> */}
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
          </Card>
        </div>



        <div className='col-lg-3 col-md-6 col-sm-12 '>
        <Card  style={{Border:'none'}}>
            <Card.Body>
              <img src={sales} alt={sales} className='img-fluid'  style={{height:'90px',width:'150px'}} />



              <div className='container'>
                <div className='row'>
                  <div className='col-7'>
                   <Card.Title>Total Sales</Card.Title>
                   <Card.Title>$25,789</Card.Title>
                   <Card.Subtitle className="mb-2 text-muted">Last 24 hours</Card.Subtitle>

                  </div>
                  <div className='col-5 mt-4'>

                  <img src={logo} alt={sales} className='img-fluid'/>
                    
                  </div>

                </div>
               </div>
              {/* <Card.Title>Total Sales</Card.Title>
              <Card.Title>$25,789</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Last 24 hours</Card.Subtitle> */}
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
          </Card>
        </div>
        </div>
       </div>
       {/* First Section */}




      {/* section section */}

      <div className='container'>
       <div className='row my-5'>



       <div className='col-lg-9 col-md-6 col-sm-12 mb-3'>
       <h5>Recent Orders</h5>
        </div>

        <div className='col-lg-3 col-md-6 col-sm-12'>
        {/* <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MM/dd/yyyy"
        placeholderText="Select a date"
      /> */}
      <h5>Recent Updates</h5>
        </div>


       <div className='col-lg-9  col-md-6 col-sm-12'>
         <Card  style={{Border:'none'}}>
            <Card.Body>
              <img src={sales} alt={sales} className='img-fluid'  style={{height:'90px',width:'150px'}} />



              <div className='container'>
                <div className='row'>
                  <div className='col-7'>
                   <Card.Title>Total Sales</Card.Title>
                   <Card.Title>$25,789</Card.Title>
                   <Card.Subtitle className="mb-2 text-muted">Last 24 hours</Card.Subtitle>

                  </div>
                  <div className='col-5 mt-4'>

                  <img src={logo} alt={sales} className='img-fluid'/>
                    
                  </div>

                </div>
               </div>
              {/* <Card.Title>Total Sales</Card.Title>
              <Card.Title>$25,789</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Last 24 hours</Card.Subtitle> */}
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
          </Card>
        </div>

        <div className='col-lg-3  col-md-6 col-sm-12'>

        <Card  style={{Border:'none'}}>
            <Card.Body>
              <img src={sales} alt={sales} className='img-fluid'  style={{height:'90px',width:'150px'}} />



              <div className='container'>
                <div className='row'>
                  <div className='col-7'>
                   <Card.Title>Total Sales</Card.Title>
                   <Card.Title>$25,789</Card.Title>
                   <Card.Subtitle className="mb-2 text-muted">Last 24 hours</Card.Subtitle>

                  </div>
                  <div className='col-5 mt-4'>

                  <img src={logo} alt={sales} className='img-fluid'/>
                    
                  </div>

                </div>
               </div>
              {/* <Card.Title>Total Sales</Card.Title>
              <Card.Title>$25,789</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Last 24 hours</Card.Subtitle> */}
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
          </Card>
        
        </div>


        



         
        </div>
       </div>




       </div>
        </div>
      </div>

      

      
      

      {/* section section */}

      
      
      
      </>
   )
 }
 
 export default Adminhomepage

