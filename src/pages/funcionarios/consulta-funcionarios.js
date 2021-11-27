import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../../components/card";
import FormGroup from "../../components/form-group";
import SelecMenu from "../selectMenu";
import FuncionariosTable from "./funcionariosTable";

class ConsultaFuncionarios extends React.Component {
  render() {
    const cargo = [
      { label: "Selecione...", value: "" },
      { label: "Agente de Saúde", value: 1 },
      { label: "Agente Sanitário", value: 2 },
    ];

    const funcionarios = [
      {id: 1, nome: 'Manoel', cpf: '71258747896', cep: '88525698', telefone: 4899997854, coordenador: 1}
    ]

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
                <SelecMenu className="form-control" lista={cargo} />
              </FormGroup>

              <button
                style={{ width: "150px" }}
                //onClick={this.entrar}
                className="btn btn-success"
              >
                <i className="pi pi-sign-in"></i>
                <span className="text-btn">Buscar</span>
              </button>
              <button
                style={{ width: "150px" }}
                //onClick={this.prepareCadastrar}
                className="btn btn-primary"
              >
                <i className="pi pi-plus"></i>
                <span className="text-btn">Cadastrar</span>
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <div className="bs-component">
              <FuncionariosTable funcionarios={funcionarios}></FuncionariosTable>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default withRouter(ConsultaFuncionarios);
