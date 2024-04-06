import React from "react";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
     
        <div className="dashboard-sub-container">
          <div className="dashbord-deatil">
            <div className="img"></div>
            <div className="name-detail">
              <h1>Vishal Sharma</h1>
              <h3>Education</h3>

              <div className="mobile-number">
                <FontAwesomeIcon icon={faMobileAlt} />
                <span className="number">+8928922992</span>
              </div>

              <div className="email-address">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="email">example@example.com</span>
              </div>
            </div>
            <div className="other-detail">
              <h2>Start were you left</h2>
              <p>hii here you have a chance of creating new things</p>
              <div class="btn-box">
                <button className="dashboard-btn">Start</button>
              </div>
            </div>
          </div>
        
        {/* below detail */}
        <div className="dashboard-card">
          
          <div className="count-of-mentee">
            <h2>count of mentee</h2>
            <p>3</p>
          </div>
          <div className="experience-level">
          <h2>experience level</h2>
            <p>intermediate</p>
          </div>
          <div className="count-of-mentee">
          <h2>count of mentee</h2>
            <p>3</p>
          </div>
          <div className="rating">
          <h2>rating</h2>
            <p>3</p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;