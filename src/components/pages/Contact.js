import React from "react";
import "../styles/contact.css"
// import { Link, Route } from "react-router-dom";


function Contact(props) {
  return (
    <div className="container">
      <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="w-100 card bg-dark text-white">
                  <h2>Contact</h2>
                  <hr></hr>
                  <div className="row">
                    <div className="col-md-6">
                      <p>How to contact me:</p>
                      <p>scottdouglas238@gmail.com</p>
                    </div>
                    <div className="col-md-6">
                      <p>My GitHub Profile Page:</p>
                      <a rel="noopener noreferrer" className="ancorTag" target="_blank" href="https://github.com/scottdouglas238">github.com/scottdouglas238</a>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-md-6">
                      <p>Phone Number:</p>
                      <p>602-505-2339</p>
                    </div>
                    <div className="col-md-6">
                      <p>My LinkedIn Profile:</p>
                      <a rel="noopener noreferrer" className="ancorTag" target="_blank" href="https://www.linkedin.com/in/scott-douglas-8482641ab/">linkedin.com/scott-douglas</a>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-md-6">
                      <p>My Resume:</p>
                      <a rel="noopener noreferrer" className="ancorTag" target="_blank" href="https://drive.google.com/file/d/19o2VPyN_o_Y4wTTaf8B30ka-i4KIT522/view?usp=sharing">Scott Douglas Resume</a>
                    </div>
                  </div>
                </div>
              </div>
      {/* <div id = "contactCard" className="w-75 p-3 card bg-dark text-white">
        <h2>Contact</h2>
        <hr></hr>
         <form>
         <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name Here"></input>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email Adress Here"></input>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="message" rows="3"></textarea>
            </div>
         </form>
         <button id = "contactBtn" type="button" className="btn btn-info">Submit</button> 
      </div> */}
    </div>
  );
}

export default Contact;
