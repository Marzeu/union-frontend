import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import SelecMenu from "./selectMenu";

class ConsultaFuncionarios extends React.Component {
  render() {
    const lista = [
      { label: "Selecione...", value: "" },
      { label: "Agente de Saúde", value: 1 },
      { label: "Agente Sanitário", value: 2 },
    ];

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
              <FormGroup htmlFor="inputCargo" label="Cargo: *">
                <SelecMenu className="form-control" lista={lista} />
              </FormGroup>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default ConsultaFuncionarios;
