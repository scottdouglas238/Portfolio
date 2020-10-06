import React from "react";
import "../styles/about.css"

function About() {
  return (
    <div class="container">
      <div class = "insideCard">
      <div class = "card bg-dark text-white">
      <h2>About me</h2>
      <hr></hr>
      <div>
       <img src = "https://cm1.narvii.com/7072/85e0dcddc9f27ada4414434e92607ab22660440a_00.jpg" alt = "YouTube" className = "firstClass"/>
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
