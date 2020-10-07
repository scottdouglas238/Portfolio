import React from "react";
import "../styles/about.css"

function About() {
  return (
    <div className ="container">
      <div className = "insideCard">
      <div className = "w-75 card bg-dark text-white">
      <h2>About me</h2>
      <hr></hr>
      <div>
       <img src = "https://avatars1.githubusercontent.com/u/68038260?s=460&u=800647a0ff518ff0a7e6c9f2f92d276eb7a6e74c&v=4" alt = "YouTube" className = "firstClass"/>
      <p id = "aboutP">
      My name is Scott Douglas. I have worked in many industries, including, but not limited to, food and beverage, customer service, banking, and retail. I am currently a student at The University of Arizona attending a coding bootcamp course, with the aim of becoming a professional programmer. I am a quick learner and am always eager for a challenge. During my time in customer service I learned how to deal with the public and have developed many professional relationships as a result. Attention too detail was crucial to my success when I worked for GM Financial, which is where I credit most of my professional experience. I was a service specialist. This role required me to speak to customers who requested a supervisor, sometimes taking close to 20 escalated calls in one day! Although it was not without challenges, I developed the skill of working under intense pressure.
      </p>
      </div>
      </div>
      </div>
    </div>

  );
}

export default About;
