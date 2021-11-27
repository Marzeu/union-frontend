import React from "react";
import Rotas from "./routes/rotas";
import Navbar from "../components/navbar";

import "toastr/build/toastr.min.js";

import "bootswatch/dist/flatly/bootstrap.css";
import "../assets/css/custom.css";
import "toastr/build/toastr.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Rotas />
      </div>
    </>
  );
}

export default App;
