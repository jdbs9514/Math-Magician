import React from "react";
import Navbar from "./Navbar";
import "../App.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="main">
        <h2>Welcome to our page!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ipsum
          tempore, ea soluta tenetur expedita dignissimos similique deleniti
          doloribus fugiat! Necessitatibus, sint doloribus deserunt voluptates
          impedit cumque alias, aperiam illo dolore explicabo iuress culpa
          distinctio inventore perspiciatis sunt ipsam
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ipsum
          tempore, ea soluta tenetur expedita dignissimos similique deleniti
          doloribus fugiat! Necessitatibus, sint doloribus deserunt voluptates
          impedit cumque alias, aperiam illo dolore explicabo iure
        </p>
      </div>
    </>
  );
}

export default Home;
