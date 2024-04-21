import React from 'react';
import Card from 'react-bootstrap/Card';

function Signin() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="col-md-8">
          <Card className="w-100" style={{ borderRadius: '20px' }}>
            <div className="row">
              <div className="col-md-6 p-4">
                <h4 className="text-center mb-2">Sign in</h4>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
              <div className="col-md-6 green-background pt-5" style={{    textAlign: 'center' }}>
                <h4 className="pt-5">Hello Friend!</h4>
                <p>No results containing all your search terms were found. Your search - iueuehweufwe - did not match any documents.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Signin;
