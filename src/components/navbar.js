import React from "react";
import NavbarItem from "./navbaritem";
import { AuthConsumer } from '../main/provedorAutenticacao'

function Navbar (props) {    
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <a href="#/" className="navbar-brand">
          Union
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">           
            <NavbarItem
              render={props.isCoordenadorAutenticado}
              href="#/cadastrar-funcionarios"
              label="Cadastrar Funcionários"
            />
            <NavbarItem
              render={props.isCoordenadorAutenticado}
              href="#/consulta-funcionarios"
              label="Funcionários"
            />
            <ul className="navbar-nav exit" style={{ float: "right" }} />
            <NavbarItem
              render={props.isCoordenadorAutenticado}
              onClick={props.deslogar}
              href="#/login"
              label="Sair"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default () => (
    <AuthConsumer>
      {(context) => (
          <Navbar isCoordenadorAutenticado={context.isAutenticado} deslogar={context.encerrarSessao} />
      )}
    </AuthConsumer>
  )
