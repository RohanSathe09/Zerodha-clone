import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 m-3">
        <div className="col-6 p-3 ">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
         
          <div className="input-container ">
        <input placeholder="Eg. How Do I Activate F&O Why Is My Order Rejected..."  />
        
      </div>
          <br />
          <div>
          <a id="ak" href="">Track account opening</a>
          <a id="ak" href="" >Track segment activation</a>
          <a id="ak" href="">Intraday margins</a>
          <a id="ak" href="">Kite user manual</a>
          </div>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li><br></br>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;