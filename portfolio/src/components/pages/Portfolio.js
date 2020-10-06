import React from "react";
import "../styles/portfolio.css"

function Blog() {
  return (
    <>
     <div className = "container">
      <div className = "row">
       <div className = "col-sm-12 col-md-6 col-lg-6">
        <div className = "w-100 card bg-dark text-white">
       <h2>Portfolio</h2>
        <hr></hr>
         <div className = "row">
          <div className = "col-md-6">
           <p>How to contact me:</p>
           <p>scottdouglas238@gmail.com</p>
          </div>
           <div className = "col-md-6">
            <p>My GitHub Profile Page:</p>
            <a className = "ancorTag" target = "_blank" href = "https://github.com/scottdouglas238">github.com/scottdouglas238</a>
           </div>
         </div>
         <hr></hr>
         <div className = "row">
          <div className = "col-md-6">
           <p>Phone Number:</p>
           <p>602-505-2339</p>
          </div>
           <div className = "col-md-6">
            <p>My LinkedIn Profile:</p>
            <a className = "ancorTag" target = "_blank" href = "https://www.linkedin.com/in/scott-douglas-8482641ab/">linkedin.com/scott-douglas</a>
           </div>
         </div>
         <hr></hr>
         <div className = "row">
          <div className = "col-md-6">
           <p>My Resume:</p>
           <a className = "ancorTag" target = "_blank" href = "https://drive.google.com/file/d/19o2VPyN_o_Y4wTTaf8B30ka-i4KIT522/view?usp=sharing">Scott Douglas Resume</a>
          </div>
         </div>
        </div>
       </div>
        <div className = "col-sm-12 col-md-6 col-lg-6">
         <div className = "w-100 card bg-dark text-white">
         <div className = "col-md-6">
          <h2>Projects</h2>
          <hr></hr>
           <div className = "row">
            <div className = "col-md-6">
             
            </div>
           </div>
          </div>
        </div>
        </div>
      </div>
     </div>
      
    </>
  );
}

export default Blog;
