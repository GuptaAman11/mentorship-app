import React from "react";
import "./upsession.css"
const Upsession = () => {
  return (
    <div className="session-container">
      <div className="session-sub-container">
        <h1>Upcoming Session</h1>
        <div className="session-card">
          <div className="session-img">
          <img className="card-img-top" src="https://tse3.mm.bing.net/th?id=OIP.W9RFknwcGfgpMFJFhQurjgHaEK&pid=Api&P=0&h=180" alt="Card image cap" />
          </div>
          <div className="session-detail">
            <div className="card-top">
                <h2> Title :Vishal Sharma</h2>
                <div className="time">
                        4pm - 6pm
                </div>
                
            </div>
            <div className="card-detail">
            <h3><span>Domain:</span> domain</h3>
              <h4><span>Topic:</span> topic</h4>
              <h5><span>Author:</span> author</h5>
              <p><span>Description:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, earum.</p>



            </div>
            <div className="card-btn">
                <h3>12/12/2024</h3>
            <button className="session-btn">Joined</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upsession;
