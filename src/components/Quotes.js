import React from "react";
import "../App.css";
import Navbar from "./Navbar";

function Quotes() {
  return (
    <>
      <Navbar />
      <div className="quotes">
        <p>
          Mathmatics is not about numbers,eauations, computations, or
          algorithms: it is about understanding. - William Paul Thurston
        </p>
      </div>
    </>
  );
}

export default Quotes;
