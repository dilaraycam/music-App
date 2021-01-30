import React from "react";
import "./Home.css";
import Search from "./Search";

function Home(props) {
  return (
    <>
      <div className="col-sm-12" id="musicPhoto">
        <div className="card bg-dark text-white border-0">
          <img
            src="https://i.pinimg.com/originals/84/1e/f6/841ef68903cbf1a1ad6f0a67e89adc28.jpg"
            id="musicCard"
            className="img-fluid"
            alt="..."
          />
          <div className="card-img-overlay">
            <h5 className="card-title text-center pt-5" id="searchMusic">
              DO YOU WANT TO SEARCH FOR <span id="spanText">MUSIC?</span>
              <Search />
            </h5>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
