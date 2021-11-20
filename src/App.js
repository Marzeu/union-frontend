import React, { useState } from "react";
import Rotas from "./routes/rotas";
// import './assets/css/login.css';
// import './assets/css/menu.css';
import 'bootswatch/dist/flatly/bootstrap.css'
import './assets/css/custom.css'
import Navbar from "./components/navbar";

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
