import React from "react";
import "../styles/contact.css"
// import { Link, Route } from "react-router-dom";


function Contact(props) {
  return (
    <div className="container">
      <div id = "contactCard" className="w-75 p-3 card bg-dark text-white">
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
      </div>
    </div>
  );
}

export default Contact;
