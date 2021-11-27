import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../components/card";
import FormGroup from "../components/form-group";

class ConsultaFuncionarios extends React.Component {
  render() {
    return (
      <Card title="Consulta Funcionários">
        <div className="row">
          <div className="col-md-6">
            <div className="bs-component">
              <FormGroup htmlFor="inputNome" label="Nome: *">
                <input
                  type="text"
                  className="form-control"
                  id="inputNome"
                  aria-describedby="nomeHelp"
                  placeholder="Digite o Nome"
                />
              </FormGroup>
              <FormGroup htmlFor="inputNome" label="Nome: *">
                <input
                  type="text"
                  className="form-control"
                  id="inputNome"
                  aria-describedby="nomeHelp"
                  placeholder="Digite o Nome"
                />
              </FormGroup>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default ConsultaFuncionarios;
