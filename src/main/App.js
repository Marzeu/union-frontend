import React from "react";
import Rotas from "./routes/rotas";
import Navbar from "../components/navbar";
import "toastr/build/toastr.min";
import "bootswatch/dist/flatly/bootstrap.css";
import "../assets/css/custom.css";
import "toastr/build/toastr.css";
import ProvedorAutenticacao from "./provedorAutenticacao";

class App extends React.Component {
  render() {
    return (
      <ProvedorAutenticacao>
        <Navbar />
        <div className="container">
          <Rotas />
        </div>
      </ProvedorAutenticacao>
    );
  }
}

export default App;
