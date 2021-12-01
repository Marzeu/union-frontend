import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../../pages/home";
import Login from "../../pages/login";
import LandingPage from '../../pages/landingPage'
import ConsultaFuncionarios from "../../pages/funcionarios/consulta-funcionarios";
import CadastrarFuncionario from "../../pages/funcionarios/cadastrar-funcionario";
import { AuthConsumer } from "../provedorAutenticacao";
import { HashRouter } from "react-router-dom";

function RotaAutenticada({ component: Component, isCoordenadorAutenticado, ...props }) {
  return (
    <Route exact {...props} render={ (componentProps) => {
      if(isCoordenadorAutenticado){
          return (
              <Component {...componentProps} />
          )
      }else{
          return(
              <Redirect to={ {pathname : '/login', state : { from: componentProps.location } } } />
          )
      }
  }}  />
)
}

function Rotas (props) {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={LandingPage} />  
        <RotaAutenticada isCoordenadorAutenticado={props.isCoordenadorAutenticado} path="/home" component={Home} />
        <RotaAutenticada isCoordenadorAutenticado={props.isCoordenadorAutenticado} path="/consulta-funcionarios" component={ConsultaFuncionarios} />
        <RotaAutenticada isCoordenadorAutenticado={props.isCoordenadorAutenticado} path="/cadastrar-funcionarios/:id?" component={CadastrarFuncionario} />


        {/* <RotaAutenticada isCoordenadorAutenticado={props.isCoordenadorAutenticado} path="/home" component={Home} />
        <RotaAutenticada isCoordenadorAutenticado={props.isCoordenadorAutenticado} path="/consulta-funcionarios" component={ConsultaFuncionarios} />
        <RotaAutenticada isCoordenadorAutenticado={props.isCoordenadorAutenticado} path="/cadastrar-funcionarios/:id?" component={CadastrarFuncionario} /> */}
      </Switch>
    </HashRouter>
  );
};

export default () => (
  <AuthConsumer>
    {(context) => (
      <Rotas isCoordenadorAutenticado={context.isCoordenadorAutenticado} />
    )}
  </AuthConsumer>
);
