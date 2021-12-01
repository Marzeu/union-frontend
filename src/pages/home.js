import React from "react";
import CoordenadorService from "../app/service/coordenadorService";
import { AuthContext } from "../main/provedorAutenticacao";

class Home extends React.Component {
  constructor() {
    super();
    this.coordenadorService = new CoordenadorService();
  }

  componentDidMount() {
    const coordenadorLogado = this.context.coordenadorAutenticado;
  }

  render() {
    return (
      <div
        className="jumbotron col-md-12"
        style={{ position: "relative", margin: "200px auto" }}
      >        
        <h1 className="display-3">Bem vindo (a)!</h1>
        <p className="lead">Esse é seu sistema.</p>       
        <hr className="my-4" />
        <p>
          E essa é sua área administrativa, utilize um dos menus ou botões
          abaixo para navegar pelo sistema.
        </p>
        <p className="lead">         
          <a
            className="btn btn-success btn-lg"
            href="#/cadastrar-funcionarios"
            role="button"
          >
            <i className="pi pi-money-bill"></i>
            <span className="text-btn">Cadastrar Funcionário</span>
          </a>
        </p>
      </div>
    );
  }
}

Home.contextType = AuthContext;

export default Home;
